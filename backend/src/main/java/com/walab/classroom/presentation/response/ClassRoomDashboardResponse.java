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
public class ClassRoomDashboardResponse {
    private Long classId;
    private String className;
    private String instructorName;
    private int videoCheck;
    private String latestNotice;
    private int numberOfTake;
    private LocalDateTime classRoomRegDate;
    private String image;
}
