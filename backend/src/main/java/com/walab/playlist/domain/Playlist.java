package com.walab.playlist.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.walab.common.BaseEntity;
import com.walab.content.domain.Content;
import com.walab.playlist.application.dto.MyPlaylistDto;
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


    @OneToMany(mappedBy = "playlist")
    private List<Video> videos;

    public MyPlaylistDto myPlaylistDto(){
        return new MyPlaylistDto(this.id, this.playlistName, this.description, this.user.getName(), this.thumbnailld);
    }


}
