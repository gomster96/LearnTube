package com.walab.lecture.domain.dto;

import com.walab.classroom.domain.ClassRoom;
import com.walab.lecture.domain.Lecture;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class LectureDataDto {
    private Long lectureId;
    private int lectureNum;
    private LocalDateTime modDate;
    private Long classId;

    public LectureDataDto (Lecture lecture) {
        this.lectureId = lecture.getId();
        this.lectureNum = lecture.getLectureNum();
        this.modDate = lecture.getModDate();
        this.classId = lecture.getClassRoom().getId();
    }
}
