package com.walab.lecture.application.dto;

import com.walab.content.domain.Content;
import com.walab.video.domain.Video;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LectureContentDto {
    private int lectureNum;
    private Long id;
    private String contentName;
    private LocalDateTime closeDate;

    public LectureContentDto(Content contents) {
        this.lectureNum = contents.getLecture().getLectureNum();
        this.id = contents.getId();
        this.contentName = contents.getContentName();
        this.closeDate = contents.getCloseDate();
    }
}
