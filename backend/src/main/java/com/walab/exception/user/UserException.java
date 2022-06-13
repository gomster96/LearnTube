package com.walab.exception.user;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class UserException extends LearnTubeException {
    protected UserException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}