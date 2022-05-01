package com.walab.notice.domain;

import java.time.LocalDateTime;
import java.util.Objects;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;

import com.walab.notice.applecation.dto.NoticeCUDto;
import com.walab.notice.applecation.dto.NoticeDetailDto;
import com.walab.notice.applecation.dto.NoticeDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Notice {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="classRoom_id")
    private ClassRoom classRoom;

    private String title;

    private String content;

    private LocalDateTime modDate;


    @PrePersist
    public void modDate(){
        this.modDate = LocalDateTime.now();
    }

    public Notice(NoticeCUDto noticeCUDto){
        setNoticeDatas(noticeCUDto);
    }

    public Notice(ClassRoom classRoom, NoticeCUDto noticeCUDto) {
        addClassRoom(classRoom);
        setNoticeDatas(noticeCUDto);
    }

    private void addClassRoom(ClassRoom classRoom){
        this.classRoom=classRoom;
        classRoom.getNotices().add(this);
    }

    public void update(NoticeCUDto noticeCUDto){
        setNoticeDatas(noticeCUDto);
    }

    public void setNoticeDatas(NoticeCUDto noticeCUDto){
        this.title = noticeCUDto.getTitle();
        this.content = noticeCUDto.getContent();
        this.modDate = LocalDateTime.now();
    }

    public NoticeDto toDto(){
        if(Objects.isNull(this.classRoom)){
            return new NoticeDto(this.id, this.title, this.content, this.modDate, null);
        }
        return new NoticeDto(this.id, this.title, this.content, this.modDate, this.classRoom.getId());
    }

    public NoticeDetailDto toReadDto(){
        if(Objects.isNull(this.classRoom)){
            return new NoticeDetailDto(this.title, this.content, this.modDate, null);
        }
        return new NoticeDetailDto(this.title, this.content, this.modDate, this.classRoom.getId());
    }





}
