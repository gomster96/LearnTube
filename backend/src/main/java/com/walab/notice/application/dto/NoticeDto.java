package com.walab.notice.application.dto;

import com.walab.notice.presentation.response.NoticeResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.PrePersist;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NoticeDto {
    private Long noticeId;
    private String title;
    private String content;
    private LocalDateTime modDate;
    private Long classId;



    @PrePersist
    public void modDate(){
        this.modDate = LocalDateTime.now();
    }

    public NoticeResponse noticeResponse() {
        return new NoticeResponse(this.noticeId, this.title, this.content, this.modDate);
    }

}
