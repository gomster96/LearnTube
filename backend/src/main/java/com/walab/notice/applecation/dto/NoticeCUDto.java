package com.walab.notice.applecation.dto;

import com.walab.notice.domain.Notice;
import com.walab.notice.domain.request.NoticeCreationRequest;
import com.walab.notice.domain.request.NoticeUpdateRequest;
import com.walab.notice.presentation.response.NoticeClassResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.PrePersist;
import java.time.LocalDateTime;


@Getter
@Setter
public class NoticeCUDto {
    private Long noticeId;
    private String title;
    private String content;
    private LocalDateTime modDate;

    @PrePersist
    public LocalDateTime modDate(){
        this.modDate = LocalDateTime.now();
        return this.modDate;
    }

    public NoticeCUDto(NoticeCreationRequest entity){
        this.noticeId = entity.getNoticeId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.modDate = entity.getModDate();
    }
    public NoticeCUDto(NoticeUpdateRequest entity){
        this.noticeId = entity.getNoticeId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
//        this.modDate = entity.getModDate();
    }


}
