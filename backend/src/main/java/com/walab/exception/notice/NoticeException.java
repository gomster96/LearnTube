package com.walab.exception.notice;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class NoticeException extends LearnTubeException {
    protected NoticeException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}