package com.walab.playlist.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.walab.classroom.application.dto.ClassRoomCUDto;
import com.walab.common.BaseEntity;
import com.walab.content.application.dto.ContentCUDto;
import com.walab.content.domain.Content;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.application.dto.PlaylistCUDto;
import com.walab.playlist.presentation.response.PlaylistCUResponse;
import com.walab.playlist.application.dto.PlaylistNameDto;
import com.walab.user.domain.User;
import com.walab.video.domain.Video;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;


@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@SQLDelete(sql = "UPDATE playlist SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Playlist extends BaseEntity {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @OneToMany(mappedBy = "playlist")
    private List<Content> contents = new ArrayList<>();

    private String playlistName;

    private String description;

    private String thumbnailld;
    public Playlist(PlaylistCUDto playlistCUDto) {
        this.playlistName = playlistCUDto.getPlaylistName();
        this.description = playlistCUDto.getDescription();
    }
    @OneToMany(mappedBy = "playlist")
    private List<Video> videos = new ArrayList<>();

    public Playlist(User user, PlaylistCUDto playlistCUDto) {
        this(playlistCUDto);
        this.user = user;
    }

    public MyPlaylistDto myPlaylistDto(){
        return new MyPlaylistDto(this.id, this.playlistName, this.description, this.user.getName(), this.thumbnailld, this.videos);
    }

    public MyPlaylistDto toCreateResponseDto(){
        return MyPlaylistDto.builder()
                .playlistId(this.id)
                .name(this.playlistName)
                .description(this.description)
                .userName(this.user.getName())
                .build();
    }

    public void update(PlaylistCUDto playlistCUDto) {
        this.playlistName = playlistCUDto.getPlaylistName();
        this.description = playlistCUDto.getDescription();
    }

    public PlaylistNameDto playlistNameDto(){
        return new PlaylistNameDto(this.id, this.playlistName);
    }


}
