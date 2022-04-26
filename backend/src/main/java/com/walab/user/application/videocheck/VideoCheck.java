package com.walab.user.application.videocheck;

import java.time.LocalDateTime;

import javax.persistence.*;

import com.walab.user.domain.User;
import com.walab.video.domain.Video;

import lombok.Getter;

@Entity
@Getter
public class VideoCheck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Video video;

    private int status;

    private LocalDateTime watchedDate;
}
