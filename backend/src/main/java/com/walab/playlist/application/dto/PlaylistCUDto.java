package com.walab.playlist.application.dto;

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
    private String playlistName;
    private String description;
}
