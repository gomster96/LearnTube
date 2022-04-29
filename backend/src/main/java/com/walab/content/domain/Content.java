package com.walab.content.domain;

import java.time.LocalDateTime;
import javax.persistence.*;

import com.walab.content.application.dto.ContentCUDto;
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

    @ManyToOne(fetch = FetchType.LAZY)
    private Playlist playlist;

    private LocalDateTime openDate;

    private LocalDateTime closeDate;

    public Content(Lecture lecture, ContentCUDto contentCUDto, Playlist playlist){
        addLecture(lecture);
        addPlaylist(playlist);
        this.contentName = contentCUDto.getContentName();
        this.contentDescription = contentCUDto.getContentDescription();
        this.openDate = contentCUDto.getOpenDate();
        this.closeDate = contentCUDto.getCloseDate();
    }
    private void addLecture(Lecture lecture){
        this.lecture = lecture;
        lecture.getContents().add(this);
    }
    private void addPlaylist(Playlist playlist){
        this.playlist = playlist;
        playlist.getContents().add(this);
    }
    private void updatePlaylist(Playlist playlist){
        this.playlist.getContents().remove(this);
        this.playlist = playlist;
        playlist.getContents().add(this);
    }

    public void update(ContentCUDto contentCUDto, Playlist playlist){
        this.contentName = contentCUDto.getContentName();
        this.contentDescription = contentCUDto.getContentDescription();
        this.openDate = contentCUDto.getOpenDate();
        this.closeDate = contentCUDto.getCloseDate();
        updatePlaylist(playlist);
    }

    public ContentDto toDto(){
        return new ContentDto(this.id, this.contentName, this.openDate, this.closeDate, this.playlist.getId());
    }
}
