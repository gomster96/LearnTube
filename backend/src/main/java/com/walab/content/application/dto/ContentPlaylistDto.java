package com.walab.content.application.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.walab.playlist.domain.Playlist;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContentPlaylistDto {
    private Long id;
    private String playlistTitle;
    private LocalDateTime totalTime;
    private List<ContentVideoDto> videos;

    public ContentPlaylistDto(Playlist playlist, List<ContentVideoDto> videos){
        this.id = playlist.getId();
        this.playlistTitle = playlist.getPlaylistName();
        // ToDo total Time 나중에 캡스톤 팀에서 playlist 하면서 구현되면 이때 넣기 지금은 그냥 기본값
        this.totalTime = LocalDateTime.now();

        this.videos = videos;
    }
}
