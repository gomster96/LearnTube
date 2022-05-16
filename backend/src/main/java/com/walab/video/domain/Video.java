package com.walab.video.domain;

import java.util.List;
import javax.persistence.*;

import com.walab.common.BaseEntity;
import com.walab.content.application.dto.ContentCUDto;
import com.walab.playlist.domain.Playlist;
import com.walab.user.application.videocheck.VideoCheck;

import com.walab.video.application.dto.VideoCUDto;
import com.walab.video.application.dto.VideoDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Getter
@NoArgsConstructor
@SQLDelete(sql = "UPDATE video SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Video extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Playlist playlist;

    @OneToMany(mappedBy = "video")
    private List<VideoCheck> videoChecks;

    private String youtubeId;

    private String title;

    private String newTitle;

    private float start_s;

    private float end_s;

    private String tag;

    private int seq;

    private float maxLength;

    private float duration;

    public Video(Playlist playlist) {
        this.playlist = playlist;
        playlist.getVideos().add(this);
    }

    public Video(VideoCUDto videoCUDto, Playlist playlist) {
        setVideoData(videoCUDto, playlist);
        addPlaylist(playlist);
    }
    private void addPlaylist(Playlist playlist) {
        this.playlist = playlist;
        playlist.getVideos().add(this);
    }
    public void setVideoData(VideoCUDto videoCUDto, Playlist playlist) {
        this.playlist = playlist;
        this.youtubeId = videoCUDto.getYoutubeId();
        this.title = videoCUDto.getTitle();
        this.newTitle = videoCUDto.getNewTitle();
        this.start_s = videoCUDto.getStart_s();
        this.end_s = videoCUDto.getEnd_s();
    }
    public VideoDto toDto() {
        return new VideoDto(this.id,this.playlist.getId(), this.youtubeId, this.title,this.newTitle, this.start_s, this.end_s, this.tag, this.seq, this.maxLength, this.duration);
    }

}
