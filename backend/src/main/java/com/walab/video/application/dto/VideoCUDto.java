package com.walab.video.application.dto;

import com.walab.content.presentation.request.ContentCreateRequest;
import com.walab.video.presentation.request.VideoCreateRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class VideoCUDto {
    private Long playlistId;
    private String youtubeId;
    private String title;
    private String newTitle;
    private Float start_s;
    private Float end_s;
    private Float duration;

    public VideoCUDto(VideoCreateRequest videoCreateRequest) {
        this.playlistId = videoCreateRequest.getPlaylistId();
        this.youtubeId = videoCreateRequest.getYoutubeId();
        this.title = videoCreateRequest.getTitle();
        this.newTitle = videoCreateRequest.getNewTitle();
        this.start_s = videoCreateRequest.getStart_s();
        this.end_s = videoCreateRequest.getEnd_s();
        this.duration = videoCreateRequest.getDuration();
    }
}
