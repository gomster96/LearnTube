package com.walab.classroom.domain.notice;

import java.time.LocalDateTime;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;

import lombok.Getter;

@Entity
@Getter
public class Notice {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    private String title;

    private String content;

    private LocalDateTime modDate;
}
