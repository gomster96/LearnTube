package com.walab.video.presentation.request;

import com.walab.video.application.dto.VideoCUDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VideoCreateRequest {
    private Long playlistId;
    private String youtubeId;
    private String title;
    private String newTitle;
    private float start_s;
    private float end_s;
    private float duration;

    public VideoCUDto videoCUDto() {
        return new VideoCUDto(this); }
}
