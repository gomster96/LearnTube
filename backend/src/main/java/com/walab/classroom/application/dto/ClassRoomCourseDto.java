package com.walab.classroom.application.dto;

import java.time.LocalDateTime;

import com.walab.classroom.presentation.response.ClassRoomCourseResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassRoomCourseDto {
    private Long classId;
    private String className;
    private String instructorName;
    private int numberOfTake;
    private LocalDateTime classRoomRegDate;

    public ClassRoomCourseResponse classRoomCourseResponse(){
        return new ClassRoomCourseResponse(classId, className, instructorName, numberOfTake, classRoomRegDate);
    }
}
