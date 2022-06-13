package com.walab.user.presentation;

import java.util.List;
import java.util.stream.Collectors;

import com.walab.classroom.application.ClassRoomService;
import com.walab.classroom.application.TakeService;
import com.walab.classroom.application.dto.ClassRoomCourseDto;
import com.walab.classroom.presentation.response.ClassRoomCourseResponse;
import com.walab.user.application.UserService;
import com.walab.user.application.dto.UserDto;
import com.walab.user.presentation.request.UserIdRequest;
import com.walab.user.presentation.request.UserLoginRequest;
import com.walab.user.presentation.response.UserResponse;

import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;
    private final TakeService takeService;

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

    @PostMapping("/user/delete")
    public ResponseEntity<Long> deleteUser(@RequestBody UserIdRequest request){
        Long userId = request.getUserId();
        userService.deleteUser(userId);

        return ResponseEntity.ok(userId);
    }

    @GetMapping("/user/students")
    public ResponseEntity<List<UserResponse>> getTakeStudents(@RequestParam Long classId){
        List<UserDto> userDtos = takeService.findStudents(classId);
        List<UserResponse> response = userDtos.stream().map(UserDto::userResponse).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }
}
