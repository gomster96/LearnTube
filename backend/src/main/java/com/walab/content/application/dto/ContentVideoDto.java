package com.walab.content.application.dto;

import java.time.LocalDateTime;

import com.walab.video.domain.Video;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContentVideoDto {
    private Long id;
    private String videoTitle;
    private float start_s;
    private float end_s;
    private int seq;
    private float duration;
    private String youtubeId;

    public ContentVideoDto(Video video) {
        this.id = video.getId();
        this.videoTitle = video.getTitle();
        this.start_s = video.getStart_s();
        this.end_s = video.getEnd_s();
        this.seq = video.getSeq();
        this.duration = video.getDuration();
        this.youtubeId = video.getYoutubeId();
    }
}
