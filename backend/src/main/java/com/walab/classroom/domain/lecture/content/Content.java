package com.walab.classroom.domain.lecture.content;

import java.time.LocalDateTime;
import javax.persistence.*;

import com.walab.classroom.domain.lecture.Lecture;
import com.walab.playlist.domain.Playlist;

@Entity
public class Content {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Lecture lecture;

    private String contentName;

    private String contentDescription;

    @OneToOne
    private Playlist playlist;

    private LocalDateTime openDate;

    private LocalDateTime closeDate;

}
