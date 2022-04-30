package com.walab.content.domain;

import java.time.LocalDateTime;
import java.util.Objects;
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

    public Content(Lecture lecture, ContentCUDto contentCUDto) {
        addLecture(lecture);
        setContentDatas(contentCUDto);
    }

    public Content(Lecture lecture, ContentCUDto contentCUDto, Playlist playlist) {
        this(lecture, contentCUDto);
        addPlaylist(playlist);
    }

    private void addLecture(Lecture lecture) {
        this.lecture = lecture;
        lecture.getContents().add(this);
    }

    private void addPlaylist(Playlist playlist) {
        this.playlist = playlist;
        playlist.getContents().add(this);
    }

    private void updatePlaylist(Playlist playlist) {
        this.playlist.getContents().remove(this);
        this.playlist = playlist;
        playlist.getContents().add(this);
    }

    public void update(ContentCUDto contentCUDto, Playlist playlist) {
        setContentDatas(contentCUDto);
        updatePlaylist(playlist);
    }

    public void setContentDatas(ContentCUDto contentCUDto) {
        this.contentName = contentCUDto.getContentName();
        this.contentDescription = contentCUDto.getContentDescription();
        this.openDate = contentCUDto.getOpenDate();
        this.closeDate = contentCUDto.getCloseDate();
    }

    public ContentDto toDto() {
        if (Objects.isNull(this.playlist)) {
            return new ContentDto(this.id, this.contentName, this.contentDescription,this.openDate, this.closeDate, null);
        }
        return new ContentDto(this.id, this.contentName, this.contentDescription,this.openDate, this.closeDate, this.playlist.getId());
    }

}
