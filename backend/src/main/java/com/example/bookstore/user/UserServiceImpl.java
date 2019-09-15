package com.example.bookstore.user;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<User> getAllUsers() {
        return (List<User>) this.userRepo.findAll();
    }

    @Override
    public User getUser(Long userId) {
        return this.userRepo.findById(userId).get();
    }

    @Override
    public User findByUsername(String name) {
        return this.userRepo.findByUsername(name);
    }

    @Override
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return this.userRepo.save(user);
    }

    @Override
    public User updateUser(User user, Long userId) {
        user.setId(userId);
        return this.userRepo.save(user);
    }

    @Override
    public User deleteUser(Long userId) {
        User user = this.getUser(userId);
        this.userRepo.deleteById(userId);
        return user;
    }
}
