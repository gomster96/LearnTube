package com.walab.exception.video;

import com.walab.exception.LearnTubeException;

import org.springframework.http.HttpStatus;

public class VideoNotFoundException extends LearnTubeException {
    public VideoNotFoundException(){
        super("해당 영상은 존재하지 않습니다.", HttpStatus.BAD_REQUEST);
    }
}
