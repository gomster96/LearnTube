package com.walab.user.presentation;

import com.walab.user.application.UserService;
import com.walab.user.application.dto.UserDto;
import com.walab.user.presentation.request.UserIdRequest;
import com.walab.user.presentation.request.UserLoginRequest;
import com.walab.user.presentation.response.UserResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody UserLoginRequest request){
        UserDto userDto = userService.userLogin(request.userDto());
        UserResponse response = userDto.userResponse();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/user")
    public ResponseEntity<UserResponse> getUser(@RequestParam Long userId){
        UserDto userDto = userService.findById(userId);
        UserResponse response = userDto.userResponse();

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/user")
    public ResponseEntity<Long> deleteUser(@RequestBody UserIdRequest request){
        Long userId = request.getUserId();
        userService.deleteUser(userId);

        return ResponseEntity.ok(userId);
    }
}
