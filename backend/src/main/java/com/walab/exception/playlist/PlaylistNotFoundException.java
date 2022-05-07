package com.walab.exception.playlist;

import com.walab.exception.lecture.LectureException;

import org.springframework.http.HttpStatus;

public class PlaylistNotFoundException extends PlaylistException {
    public PlaylistNotFoundException() {super("해당 플레이리스트는 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}
