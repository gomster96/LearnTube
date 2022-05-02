package com.walab.notice.domain.request;

import com.walab.notice.application.dto.NoticeCUDto;
import com.walab.notice.application.dto.NoticeIdDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoticeUpdateRequest {
    private Long noticeId;
    private String title;
    private String content;

    public NoticeIdDto noticeIdDto(){
        return new NoticeIdDto(noticeId);
    }
    public NoticeCUDto noticeCUDto(){
        return new NoticeCUDto(this);
    }



}
