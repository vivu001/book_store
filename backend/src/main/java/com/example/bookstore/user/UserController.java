package com.example.bookstore.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    private UserServiceImpl userServiceImpl;

    public UserController(UserServiceImpl userServiceImpl) {
        this.userServiceImpl = userServiceImpl;
    }


    @GetMapping("")
    public List<User> getAllUsers() {
        return this.userServiceImpl.getAllUsers();
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId) {
        return this.userServiceImpl.getUser(userId);
    }

    @PostMapping("")
    public User createUser(@RequestBody User user) {
        return this.userServiceImpl.createUser(user);
    }

    @PutMapping("/{userId}")
    public User updateUser(@RequestBody User user, @PathVariable Long userId) {
        return this.userServiceImpl.updateUser(user, userId);
    }

    @DeleteMapping("/{userId}")
    public User deleteUser(@PathVariable Long userId) {
        return this.userServiceImpl.deleteUser(userId);
    }

    @GetMapping("/login")
    public ResponseEntity<?> auth(Principal principal) {
        if (principal == null || principal.getName() == null) {
            return ResponseEntity.ok(principal);
        }
        return new ResponseEntity<>(
                userServiceImpl.findByUsername(principal.getName()),
                HttpStatus.OK);
    }

    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userServiceImpl.findByUsername(user.getUsername()) != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        user.setRole(Role.USER);
        userServiceImpl.createUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

//    @GetMapping("")
//    public ResponseEntity<?> getAllUsers(){
//        return ResponseEntity.ok(userServiceImpl.getAllUsers());
//    }
}
