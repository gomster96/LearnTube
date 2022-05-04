package com.walab.classroom.presentation;

import com.walab.classroom.application.ClassRoomService;
import com.walab.classroom.application.dto.ClassRoomCUDto;
import com.walab.classroom.application.dto.ClassRoomDto;
import com.walab.classroom.presentation.request.ClassRoomCreateRequest;
import com.walab.classroom.presentation.request.ClassRoomIdRequest;
import com.walab.classroom.presentation.request.ClassRoomUpdateRequest;
import com.walab.classroom.presentation.response.ClassRoomCreateResponse;
import com.walab.classroom.presentation.response.ClassRoomIdResponse;
import com.walab.classroom.presentation.response.ClassRoomUpdateResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/classroom")
@RequiredArgsConstructor
public class ClassRoomController {

    private final ClassRoomService classRoomService;

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
}
