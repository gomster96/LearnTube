package com.walab.exception.classroom;

import org.springframework.http.HttpStatus;

public class TakeNotFoundException extends ClassRoomException {
    public TakeNotFoundException() {super("해당 수강정보는 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}
