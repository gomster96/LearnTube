package com.walab.classroom.presentation.response;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassRoomCourseResponse {
    private Long classId;
    private String className;
    private String instructorName;
    private int numberOfTake;
    private LocalDateTime classRoomRegDate;
}
