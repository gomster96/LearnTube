package com.walab.playlist.application.dto;

import com.walab.playlist.presentation.response.PlaylistResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MyPlaylistDto {
    private Long playlistId;

    private String name;

    private String description;
    private Long userId;
    private String thumbnail;
    private LocalDateTime totalTime;

    public MyPlaylistDto(MyPlaylistDto myPlaylistDto) {
    }

    public PlaylistResponse playlistResponse() {
        return new PlaylistResponse(this.playlistId, this.name, this.description, this.userId, this.thumbnail, this.totalTime);
    }
}
