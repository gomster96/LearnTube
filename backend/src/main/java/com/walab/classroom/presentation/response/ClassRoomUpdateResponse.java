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
public class ClassRoomUpdateResponse {
    private Long classId;
    private String className;
    private String classDescription;
    private Boolean isOpened;
    private String entryCode;
    private Boolean isActive;
    private LocalDateTime closeDate;
    private String image;
}
