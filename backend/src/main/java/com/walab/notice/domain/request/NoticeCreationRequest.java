package com.walab.notice.domain.request;

import com.walab.notice.application.dto.NoticeCUDto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.PrePersist;
import java.time.LocalDateTime;


@Getter
@Setter
public class NoticeCreationRequest {
    private Long noticeId;
    private String title;
    private String content;
    private LocalDateTime modDate;
    private Long classId;

    @PrePersist
    public LocalDateTime modDate(){
        this.modDate = LocalDateTime.now();
        return this.modDate;
    }

    public NoticeCUDto noticeCUDto(){
        return new NoticeCUDto(this);
    }

}
