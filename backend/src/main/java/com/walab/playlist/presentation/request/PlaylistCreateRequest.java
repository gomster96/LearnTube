package com.walab.playlist.presentation.request;

import com.walab.playlist.application.dto.PlaylistCUDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PlaylistCreateRequest {
    private Long userId;

    private String playlistName;

    private String description;

    public PlaylistCUDto playlistCUDto() {
        return new PlaylistCUDto(playlistName, description);
    }
}
