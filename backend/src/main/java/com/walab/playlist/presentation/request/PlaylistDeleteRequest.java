package com.walab.playlist.presentation.request;

import com.walab.content.application.dto.ContentIdDto;
import com.walab.playlist.application.dto.PlaylistDeleteDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistDeleteRequest {
    private Long playlistId;

    public PlaylistDeleteDto toDto(){
        return new PlaylistDeleteDto(playlistId);
    }
}
