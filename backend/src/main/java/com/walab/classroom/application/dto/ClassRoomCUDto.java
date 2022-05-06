package com.walab.classroom.application.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassRoomCUDto {
    private String className;
    private String classDescription;
    private LocalDateTime closeDate;
    private Boolean isOpened;
    private String entryCode;
    private Boolean isActive;

}
