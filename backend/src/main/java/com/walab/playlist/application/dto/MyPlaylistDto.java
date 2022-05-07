package com.walab.playlist.application.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MyPlaylistDto {
    private Long playlistId;

    private String name;

    private String description;

    private String thumbnail;

    private Long userId;

//    public PlaylistResponse playlistResponse() {
//        return new PlaylistResponse(this.playlistId, this.name, this.description, this.thumbnail, this.userId);
//    }
}
