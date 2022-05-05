package com.walab.classroom.presentation;

import java.util.List;
import java.util.stream.Collectors;

import com.walab.classroom.application.ClassRoomService;
import com.walab.classroom.application.TakeService;
import com.walab.classroom.application.dto.ClassRoomDto;
import com.walab.classroom.application.dto.ClassRoomEnrollDto;
import com.walab.classroom.presentation.request.ClassRoomCreateRequest;
import com.walab.classroom.presentation.request.ClassRoomEnrollRequest;
import com.walab.classroom.presentation.request.ClassRoomIdRequest;
import com.walab.classroom.presentation.request.ClassRoomUpdateRequest;
import com.walab.classroom.presentation.response.ClassRoomCreateResponse;
import com.walab.classroom.presentation.response.ClassRoomIdResponse;
import com.walab.classroom.presentation.response.ClassRoomEnrollResponse;
import com.walab.classroom.presentation.response.ClassRoomUpdateResponse;
import com.walab.user.application.UserService;
import com.walab.user.application.dto.UserDto;
import com.walab.user.presentation.response.UserResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/classroom")
@RequiredArgsConstructor
public class ClassRoomController {

    private final ClassRoomService classRoomService;
    private final TakeService takeService;

    @PostMapping
    public ResponseEntity<ClassRoomCreateResponse> createClassRoom(@RequestBody ClassRoomCreateRequest request){
        ClassRoomDto classRoomDto = classRoomService.create(request.getInstructorId(), request.classRoomCUDto());
        ClassRoomCreateResponse response = classRoomDto.classRoomCreateResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/update")
    public ResponseEntity<ClassRoomUpdateResponse> updateClassRoom(@RequestBody ClassRoomUpdateRequest request){
        ClassRoomDto classRoomDto = classRoomService.update(request.getClassId(), request.classRoomCUDto());
        ClassRoomUpdateResponse response = classRoomDto.classRoomUpdateResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<ClassRoomIdResponse> deleteClassRoom(@RequestBody ClassRoomIdRequest request){
        Long deletedClassId = classRoomService.delete(request.getClassId());
        ClassRoomIdResponse response = new ClassRoomIdResponse(deletedClassId);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<ClassRoomDto> getClassRoom(@RequestParam Long userId, @RequestParam Long classId){
        //Todo 나중에 userId로 각 class의 video수강 완료에 대한 정보를 받아야한다.
        ClassRoomDto classRoomDto = classRoomService.find(userId, classId);
        return ResponseEntity.ok(classRoomDto);
    }

    @PostMapping("/enroll")
    public ResponseEntity<ClassRoomEnrollResponse> enrollClassRoom(@RequestBody ClassRoomEnrollRequest request){
        ClassRoomEnrollDto classRoomEnrollDto = takeService.create(request.getUserId(), request.getClassId());
        ClassRoomEnrollResponse response = classRoomEnrollDto.classRoomEnrollResponse();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/wait-list")
    public ResponseEntity<List<UserResponse>> getEnrollmentWaitList(@RequestParam Long classId){
        List<UserDto> takeWaitUsers = takeService.getTakeWaitUsers(classId);
        List<UserResponse> response = takeWaitUsers.stream().map(UserDto::userResponse).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }
}
