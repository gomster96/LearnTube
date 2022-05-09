package com.walab.exception.notice;

import org.springframework.http.HttpStatus;

public class NoticeNotFoundException extends NoticeException {
    public NoticeNotFoundException() {super("해당 공지는 존재하지 않습니다.", HttpStatus.BAD_REQUEST);}
}
