package com.walab.playlist.application.dto;

import com.walab.playlist.presentation.response.PlaylistCUResponse;
import com.walab.playlist.presentation.response.PlaylistResponse;
import com.walab.video.application.dto.VideoDto;
import com.walab.video.domain.Video;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyPlaylistDto {
    private Long playlistId;
    private String name;
    private String description;

    private String userName;
    private String thumbnail;

    private List<Video> videos;


    public PlaylistResponse playlistResponse() {
        List<VideoDto> newVideos = new ArrayList<>();
        for (Video video: videos) {
            VideoDto tempVideo = new VideoDto(video.getId(), video.getPlaylist().getId(), video.getYoutubeId(),video.getTitle(),video.getNewTitle(),video.getStart_s(),video.getEnd_s(),video.getTag(),video.getSeq(),video.getMaxLength(),video.getDuration());
            newVideos.add(tempVideo);
        }
        return new PlaylistResponse(this.playlistId, this.name, this.description, this.userName, this.thumbnail, newVideos);
    }

    public PlaylistCUResponse playlistCUResponse() {
        return new PlaylistCUResponse(playlistId, userName, name, description);
    }


}
