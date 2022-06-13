package com.walab.exception.playlist;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class PlaylistException extends LearnTubeException {
    protected PlaylistException(String message, HttpStatus httpStatus) {super(message, httpStatus);}
}
