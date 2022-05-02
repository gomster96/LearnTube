package com.walab.lecture.application.dto;

import com.walab.lecture.presentation.dto.LectureResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LectureDto {
    private Long lectureId;
    private int lectureNum;
    private LocalDateTime modDate;
    private Long contentId;

    public LectureResponse lectureResponse() {
        return new LectureResponse(lectureId, lectureNum, modDate, contentId);
    }
}
