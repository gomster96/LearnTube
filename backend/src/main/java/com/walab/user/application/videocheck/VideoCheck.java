package com.walab.user.application.videocheck;

import java.time.LocalDateTime;

import javax.persistence.*;

import com.walab.common.BaseEntity;
import com.walab.user.domain.User;
import com.walab.video.domain.Video;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Getter
@NoArgsConstructor
@SQLDelete(sql = "UPDATE videocheck SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class VideoCheck extends BaseEntity {

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
