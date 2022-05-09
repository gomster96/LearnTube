package com.walab.exception.content;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class ContentException extends LearnTubeException {
    protected ContentException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}
