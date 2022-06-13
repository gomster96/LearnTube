package com.walab.exception.lecture;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class LectureException extends LearnTubeException {
    protected LectureException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}