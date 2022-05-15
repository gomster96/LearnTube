package com.walab.exception.lecture;

import com.walab.exception.classroom.ClassRoomException;

import org.springframework.http.HttpStatus;

public class LectureNotFoundException extends LectureException {
    public LectureNotFoundException() {super("해당 강의는 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}

