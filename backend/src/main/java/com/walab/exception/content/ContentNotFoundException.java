package com.walab.exception.content;

import com.walab.exception.classroom.ClassRoomException;

import org.springframework.http.HttpStatus;

public class ContentNotFoundException extends ContentException {
    public ContentNotFoundException() {super("해당 컨텐츠는 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}