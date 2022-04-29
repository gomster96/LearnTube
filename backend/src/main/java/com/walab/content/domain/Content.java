package com.walab.content.domain;

import java.time.LocalDateTime;
import javax.persistence.*;

import com.walab.content.application.dto.ContentCreateDto;
import com.walab.content.application.dto.ContentDto;
import com.walab.lecture.domain.Lecture;
import com.walab.playlist.domain.Playlist;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Content {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Lecture lecture;

    private String contentName;

    private String contentDescription;

    @OneToOne(mappedBy = "content")
    private Playlist playlist;

    private LocalDateTime openDate;

    private LocalDateTime closeDate;

    public Content(Lecture lecture,ContentCreateDto contentCreateDto, Playlist playlist){
        addLecture(lecture);
        addPlaylist(playlist);
        this.contentName = contentCreateDto.getContentName();
        this.contentDescription = contentCreateDto.getContentDescription();
        this.openDate = contentCreateDto.getOpenDate();
        this.closeDate = contentCreateDto.getCloseDate();
    }
    private void addLecture(Lecture lecture){
        this.lecture = lecture;
        lecture.getContents().add(this);
    }
    private void addPlaylist(Playlist playlist){
        this.playlist = playlist;
        playlist.setContent(this);
    }

    public ContentDto toDto(){
        return new ContentDto(this.id, this.contentName, this.openDate, this.closeDate, this.playlist.getId());
    }
}
