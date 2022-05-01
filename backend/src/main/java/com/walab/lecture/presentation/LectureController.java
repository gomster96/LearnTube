package com.walab.lecture.presentation;

import com.walab.lecture.application.LectureService;
import com.walab.lecture.application.dto.LectureContentDto;
import com.walab.lecture.application.dto.LectureDto;
import com.walab.lecture.domain.dto.LectureDataDto;
import com.walab.lecture.presentation.dto.LectureCreateRequest;
import com.walab.lecture.presentation.dto.LectureResponse;
import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class LectureController {
    private final LectureService lectureService;

    @PostMapping("/lecture")
    public ResponseEntity<LectureResponse> createLecture(@RequestBody LectureCreateRequest request) {
        LectureDto createdLecture = lectureService.createLecture(request.lectureCreateDto(), request.getClassId());
        LectureResponse response = createdLecture.lectureResponse();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/lecture")
    public List<LectureContentDto> readLectureByLectureNum(@RequestParam Long classId, @RequestParam int lectureNum){
        return lectureService.findByLectureNum(classId, lectureNum);
    }

    @DeleteMapping("/lecture/{lectureId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteLecture(@PathVariable Long lectureId) {
        lectureService.deleteLecture(lectureId);
    }
}