package com.walab.video.presentation.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VideoResponse {
    private Long id;
    private String youtubeId;
    private String title;
    private String newTitle;
    private float start_s;
    private float end_s;
    private String tag;
    private int seq;
    private float maxLength;
    private float duration;

}
