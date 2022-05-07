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
    private Long userId;
    private String thumbnail;
    private LocalDateTime totalTime;
    @Builder
    public PlaylistResponse(Long userId){
        this.userId=userId;
    }
}
