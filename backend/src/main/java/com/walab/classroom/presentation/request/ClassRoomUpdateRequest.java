package com.walab.classroom.presentation.request;

import java.time.LocalDateTime;

import com.walab.classroom.application.dto.ClassRoomCUDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ClassRoomUpdateRequest {
    private Long classId;
    private String className;
    private String classDescription;
    private LocalDateTime closeDate;
    private Boolean isOpened;
    private String entryCode;
    private Boolean isActive;
    private String image;
    public ClassRoomCUDto classRoomCUDto(){
        return new ClassRoomCUDto(className, classDescription, closeDate, isOpened, entryCode, isActive, image);
    }
}
