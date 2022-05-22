package com.walab.playlist.application.dto;

import com.walab.content.presentation.request.ContentCreateRequest;
import com.walab.video.domain.Video;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistCUDto {
    private Long playlistId;
    private String playlistName;
    private String description;

    public PlaylistCUDto(String playlistName, String description) {
        this.playlistName = playlistName;
        this.description = description;
    }
}
