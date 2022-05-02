package com.walab.notice.application.dto;

import com.walab.notice.domain.Notice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.PrePersist;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class NoticeDetailDto {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime modDate;
//    private NoticeClassRoomDto classRoom;

    public NoticeDetailDto(String title, String content, LocalDateTime modDate, Long id) {
        this.title = title;
        this.content = content;
        this.modDate = modDate;
//        this.classRoom.setId(id);
    }

    @PrePersist
    public LocalDateTime modDate(){
        this.modDate = LocalDateTime.now();
        return this.modDate;
    }

    public NoticeDetailDto(Notice notice){
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.content = notice.getContent();
        this.modDate = notice.getModDate();
//        this.classRoom = classRoom;
    }
}

