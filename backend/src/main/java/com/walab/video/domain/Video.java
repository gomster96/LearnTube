package com.walab.video.domain;

import java.util.List;
import javax.persistence.*;

import com.walab.common.BaseEntity;
import com.walab.playlist.domain.Playlist;
import com.walab.user.application.videocheck.VideoCheck;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Getter
@NoArgsConstructor
@SQLDelete(sql = "UPDATE video SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Video extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Playlist playlist;

    @OneToMany(mappedBy = "video")
    private List<VideoCheck> videoChecks;

    private String youtubeId;

    private String title;

    private String newTitle;

    private float start_s;

    private float end_s;

    private String tag;

    private int seq;

    private float maxLength;

    private float duration;

}
