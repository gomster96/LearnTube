package com.walab.classroom.application.dto;

import com.walab.classroom.presentation.response.ClassRoomEnrollResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ClassRoomEnrollDto {
    private Long takeId;
    private String className;

    public ClassRoomEnrollResponse classRoomEnrollResponse(){
        return new ClassRoomEnrollResponse(takeId, className);
    }
}
