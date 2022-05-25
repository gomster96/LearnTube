package com.walab.video.presentation.request;

import com.walab.video.application.dto.VideoCUDto;
import com.walab.video.application.dto.VideoDeleteDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VideoDeleteRequest {
    private Long videoId;

    public VideoDeleteDto toVideoDeleteDto() {
        return new VideoDeleteDto(this); }
}
