package com.walab.exception.classroom;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class ClassRoomException extends LearnTubeException {
    protected ClassRoomException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}
