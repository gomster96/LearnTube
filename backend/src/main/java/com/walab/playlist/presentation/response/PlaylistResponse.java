package com.walab.playlist.presentation.response;

import com.walab.video.application.dto.VideoDto;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistResponse {
    private Long playlistId;
    private String name;
    private String description;
    private String userName;
    private String thumbnail;
    private List<VideoDto> videos;
}
