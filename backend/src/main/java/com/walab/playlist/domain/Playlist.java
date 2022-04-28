package com.walab.playlist.domain;

import java.util.List;
import javax.persistence.*;

import com.walab.content.domain.Content;
import com.walab.user.domain.User;
import com.walab.video.domain.Video;

@Entity
public class Playlist {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @OneToOne
    private Content content;

    private String playlistName;

    private String description;

    private String thumbnailld;

    @OneToMany(mappedBy = "playlist")
    private List<Video> videos;
}
