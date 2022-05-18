package com.walab.playlist.application.dto;

import com.walab.playlist.presentation.response.PlaylistNameResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistNameDto {
    private Long playlistId;
    private String playlistName;

    public PlaylistNameResponse playlistNameResponse(){
        return new PlaylistNameResponse(playlistId, playlistName);
    }
}
