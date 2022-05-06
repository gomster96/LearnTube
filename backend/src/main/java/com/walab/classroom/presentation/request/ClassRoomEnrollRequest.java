package com.walab.classroom.presentation.request;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ClassRoomEnrollRequest {
    private Long userId;
    private Long classId;
}
