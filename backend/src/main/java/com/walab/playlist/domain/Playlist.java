package com.walab.playlist.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.walab.content.domain.Content;
import com.walab.user.domain.User;
import com.walab.video.domain.Video;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Playlist {
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

}
