package com.walab.lecture.presentation.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LectureResponse {
    private Long lectureId;
    private int lectureNum;
    private LocalDateTime modDate;
    private Long contentId;
}