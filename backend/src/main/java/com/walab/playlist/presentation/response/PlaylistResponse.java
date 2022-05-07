package com.walab.playlist.presentation.response;

import lombok.*;

import java.time.LocalDateTime;

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
}
