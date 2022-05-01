package com.walab.notice.presentation.response;

import lombok.*;

import javax.persistence.PrePersist;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NoticeResponse {
    private Long noticeId;
    private String title;
    private String content;
    private LocalDateTime modDate;
//    private Long classId;

    @PrePersist
    public LocalDateTime modDate(){
        this.modDate = LocalDateTime.now();
        return this.modDate;
    }


    @Builder
    public NoticeResponse(Long noticeId){
        this.noticeId=noticeId;
    }
}
