package com.walab.exception.user;

import com.walab.exception.classroom.ClassRoomException;

import org.springframework.http.HttpStatus;

public class UserNotFoundException extends ClassRoomException {
    public UserNotFoundException() {super("해당 사용자는 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}