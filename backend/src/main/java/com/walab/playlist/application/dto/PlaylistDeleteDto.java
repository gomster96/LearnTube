package com.walab.playlist.application.dto;

import com.walab.content.presentation.response.ContentIdResponse;
import com.walab.playlist.presentation.response.PlaylistDeleteResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistDeleteDto {
    private Long playlistId;
    public PlaylistDeleteResponse playlistDeleteResponse(){
        return new PlaylistDeleteResponse(playlistId);
    }
}
