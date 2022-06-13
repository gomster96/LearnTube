package com.walab.classroom.presentation;

import java.util.List;
import java.util.stream.Collectors;

import com.walab.classroom.application.ClassRoomService;
import com.walab.classroom.application.TakeService;
import com.walab.classroom.application.dto.ClassRoomCourseDto;
import com.walab.classroom.application.dto.ClassRoomDetailDto;
import com.walab.classroom.application.dto.ClassRoomDto;
import com.walab.classroom.application.dto.ClassRoomEnrollDto;
import com.walab.classroom.application.dto.take.TakeClassRoomDto;
import com.walab.classroom.application.dto.take.TakeUserDto;
import com.walab.classroom.presentation.request.ClassRoomCreateRequest;
import com.walab.classroom.presentation.request.ClassRoomEnrollRequest;
import com.walab.classroom.presentation.request.ClassRoomIdRequest;
import com.walab.classroom.presentation.request.ClassRoomUpdateRequest;
import com.walab.classroom.presentation.request.take.TakeIdRequest;
import com.walab.classroom.presentation.response.*;
import com.walab.classroom.presentation.response.take.TakeAcceptRejectResponse;
import com.walab.classroom.presentation.response.take.TakeUserResponse;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/classroom")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ClassRoomController {

    private final ClassRoomService classRoomService;
    private final TakeService takeService;

    @PostMapping
    public ResponseEntity<ClassRoomCreateResponse> createClassRoom(@RequestBody ClassRoomCreateRequest request) {
        ClassRoomDto classRoomDto = classRoomService.create(request.getInstructorId(), request.classRoomCUDto());
        ClassRoomCreateResponse response = classRoomDto.classRoomCreateResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/update")
    public ResponseEntity<ClassRoomUpdateResponse> updateClassRoom(@RequestBody ClassRoomUpdateRequest request) {
        ClassRoomDto classRoomDto = classRoomService.update(request.getClassId(), request.classRoomCUDto());
        ClassRoomUpdateResponse response = classRoomDto.classRoomUpdateResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<ClassRoomIdResponse> deleteClassRoom(@RequestBody ClassRoomIdRequest request) {
        Long deletedClassId = classRoomService.delete(request.getClassId());
        ClassRoomIdResponse response = new ClassRoomIdResponse(deletedClassId);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<ClassRoomDetailDto> getClassRoom(@RequestParam Long userId, @RequestParam Long classId) {
        //Todo 나중에 userId로 각 class의 video수강 완료에 대한 정보를 받아야한다.
        ClassRoomDetailDto classRoomDetailDto = classRoomService.find(userId, classId);
        return ResponseEntity.ok(classRoomDetailDto);
    }

    @PostMapping("/enroll")
    public ResponseEntity<ClassRoomEnrollResponse> enrollClassRoom(@RequestBody ClassRoomEnrollRequest request) {
        ClassRoomEnrollDto classRoomEnrollDto = takeService.create(request.getUserId(), request.getClassId());
        ClassRoomEnrollResponse response = classRoomEnrollDto.classRoomEnrollResponse();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/wait-list")
    public ResponseEntity<List<TakeUserResponse>> getEnrollmentWaitList(@RequestParam Long classId) {
        List<TakeUserDto> takeWaitUsers = takeService.getTakeWaitUsers(classId);
        List<TakeUserResponse> response = takeWaitUsers.stream()
                                                       .map(TakeUserDto::takeUserResponse)
                                                       .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/accept")
    public ResponseEntity<TakeAcceptRejectResponse> acceptUser(@RequestBody TakeIdRequest request) {
        TakeUserDto takeUserDto = takeService.updateAccept(request.getTakeId());
        TakeAcceptRejectResponse response = takeUserDto.takeAcceptRejectResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/accept-all")
    public ResponseEntity<List<TakeAcceptRejectResponse>> accepAllUser(@RequestBody ClassRoomIdRequest request) {
        List<TakeUserDto> takeUserDtos = takeService.updateAllAccept(request.getClassId());
        List<TakeAcceptRejectResponse> response = takeUserDtos.stream()
                                                              .map(TakeUserDto::takeAcceptRejectResponse)
                                                              .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/reject")
    public ResponseEntity<TakeAcceptRejectResponse> rejectUser(@RequestBody TakeIdRequest request) {
        TakeUserDto takeUserDto = takeService.updateReject(request.getTakeId());
        TakeAcceptRejectResponse response = takeUserDto.takeAcceptRejectResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/reject-all")
    public ResponseEntity<List<TakeAcceptRejectResponse>> rejectAllUser(@RequestBody ClassRoomIdRequest request) {
        List<TakeUserDto> takeUserDtos = takeService.updateAllReject(request.getClassId());
        List<TakeAcceptRejectResponse> response = takeUserDtos.stream()
                                                              .map(TakeUserDto::takeAcceptRejectResponse)
                                                              .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/takes")
    public ResponseEntity<List<ClassRoomDashboardResponse>> getTakingClassRooms(@RequestParam Long userId) {
        List<TakeClassRoomDto> takingClasses = takeService.getTakingClasses(userId);
        List<ClassRoomDashboardResponse> response = takingClasses.stream()
                                                                 .map(TakeClassRoomDto::classRoomTakeResponse)
                                                                 .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/closed")
    public ResponseEntity<List<ClassRoomDashboardResponse>> getClosedClassRooms(@RequestParam Long userId) {
        List<TakeClassRoomDto> closedClasses = takeService.getClosedClasses(userId);
        List<ClassRoomDashboardResponse> response = closedClasses.stream()
                                                                 .map(TakeClassRoomDto::classRoomTakeResponse)
                                                                 .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/manages")
    public ResponseEntity<List<ClassRoomManagedResponse>> getManagedClassRooms(@RequestParam Long userId) {
        List<TakeClassRoomDto> managedClasses = classRoomService.getManagedClasses(userId);
        List<ClassRoomManagedResponse> response = managedClasses.stream()
                                                                .map(TakeClassRoomDto::classRoomManagedResponse)
                                                                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/courses")
    public ResponseEntity<List<ClassRoomCourseResponse>> getCourses(@RequestParam int condition, @RequestParam String keyword, Pageable pageable) {

        List<ClassRoomCourseDto> courseClassRooms = classRoomService.findClassRoomsByPage(condition, keyword, pageable);
        List<ClassRoomCourseResponse> response = courseClassRooms.stream()
                                                                 .map(ClassRoomCourseDto::classRoomCourseResponse)
                                                                 .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/popular")
    public ResponseEntity<List<ClassRoomCourseResponse>> getPopularCourses(){
        List<ClassRoomCourseDto> courseClassRooms = classRoomService.findClassRoomsByPage(1, "", PageRequest.of(0,3));
        List<ClassRoomCourseResponse> response = courseClassRooms.stream()
                                                                 .map(ClassRoomCourseDto::classRoomCourseResponse)
                                                                 .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }
}
