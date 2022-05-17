package com.walab.playlist.presentation.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaylistCUResponse {
    private Long playlistId;
    private String userName;
    private String name;
    private String description;
}
