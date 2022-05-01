package com.walab.lecture.application.dto;

import com.walab.lecture.presentation.dto.LectureCreateRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LectureCreateDto {
    private int lectureNum;

    public LectureCreateDto(LectureCreateRequest lectureCreateRequest) {
        this.lectureNum = lectureCreateRequest.getLectureNum();
    }
}

