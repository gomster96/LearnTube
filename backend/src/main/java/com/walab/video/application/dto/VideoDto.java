package com.walab.video.application.dto;


import com.walab.video.presentation.response.VideoResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VideoDto {

        private Long id;

        private Long playlistId;

        private String youtubeId;

        private String title;

        private String newTitle;

        private float start_s;

        private float end_s;

        private String tag;

        private int seq;

        private float maxLength;

        private float duration;


    public VideoResponse videoResponse() {
                return new VideoResponse(this.id, this.playlistId, this.youtubeId, this.title, this.newTitle, this.start_s, this.end_s, this.tag, this.seq, this.maxLength, this.duration);
        }
}
