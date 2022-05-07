package com.walab.exception;

import org.springframework.http.HttpStatus;

public class LearnTubeException extends RuntimeException {
    private final HttpStatus httpStatus;

    public LearnTubeException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {return httpStatus;}
}
