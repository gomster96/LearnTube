package com.walab.exception.video;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class VideoException extends LearnTubeException {
    protected VideoException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}
