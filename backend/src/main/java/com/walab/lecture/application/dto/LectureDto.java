package com.walab.lecture.application.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.walab.content.application.dto.ContentDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LectureDto {
    private Long lectureId;
    private int lectureNum;
    private LocalDateTime modDate;
    private List<ContentDto> contents;
}
