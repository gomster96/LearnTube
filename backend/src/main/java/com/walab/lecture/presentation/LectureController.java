package com.walab.lecture.presentation;

import java.util.List;

import com.walab.lecture.application.LectureService;
import com.walab.lecture.application.dto.LectureContentDto;
import com.walab.lecture.application.dto.LectureDataDto;
import com.walab.lecture.presentation.dto.LectureCreateRequest;
import com.walab.lecture.presentation.dto.LectureDeleteRequest;
import com.walab.lecture.presentation.dto.LectureResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/lecture")
@CrossOrigin(origins = "*")
public class LectureController {
    private final LectureService lectureService;

    @PostMapping
    public ResponseEntity<LectureResponse> createLecture(@RequestBody LectureCreateRequest request) {
        LectureDataDto createdLecture = lectureService.createLecture(request.lectureCreateDto(), request.getClassId());
        LectureResponse response = createdLecture.lectureResponse();
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public List<LectureContentDto> readLectureByLectureNum(@RequestParam Long classId, @RequestParam int lectureNum) {
        return lectureService.findByLectureNum(classId, lectureNum);
    }

    @PostMapping("/delete")
    public ResponseEntity<Long> deleteLecture(@RequestBody LectureDeleteRequest request) {
        Long deleteId = lectureService.deleteLecture(request.getLectureId());
        return ResponseEntity.ok(deleteId);
    }
}

