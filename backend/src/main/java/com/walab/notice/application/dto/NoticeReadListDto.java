package com.walab.notice.application.dto;

import com.walab.notice.domain.Notice;
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
public class NoticeReadListDto {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime modDate;

    @PrePersist
    public LocalDateTime modDate(){
        this.modDate = LocalDateTime.now();
        return this.modDate;
    }
    public NoticeReadListDto(Notice notice){
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.content = notice.getContent();
        this.modDate = notice.getModDate();
    }
}
