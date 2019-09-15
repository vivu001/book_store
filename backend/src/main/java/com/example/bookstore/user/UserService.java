package com.example.bookstore.user;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUser(Long userId);
    User findByUsername(String name);
    User createUser(User user);
    User updateUser(User user, Long userId);
    User deleteUser(Long userId);
}
