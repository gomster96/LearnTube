package com.walab.classroom.presentation;

import com.walab.classroom.application.ClassRoomService;
import com.walab.classroom.application.dto.ClassRoomCUDto;
import com.walab.classroom.application.dto.ClassRoomDto;
import com.walab.classroom.presentation.request.ClassRoomCreateRequest;
import com.walab.classroom.presentation.request.ClassRoomUpdateRequest;
import com.walab.classroom.presentation.response.ClassRoomCreateResponse;
import com.walab.classroom.presentation.response.ClassRoomUpdateResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
