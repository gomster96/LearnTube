package com.walab.exception.classroom;

import org.springframework.http.HttpStatus;

public class ClassRoomNotFoundException extends ClassRoomException {
    public ClassRoomNotFoundException() {super("해당 ClassRoom은 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}
