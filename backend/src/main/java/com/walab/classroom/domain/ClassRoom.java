package com.walab.classroom.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.walab.lecture.domain.Lecture;
import com.walab.notice.domain.Notice;
import com.walab.classroom.domain.take.Take;
import com.walab.user.domain.User;

import lombok.Getter;

@Entity
@Getter
public class ClassRoom {
    @Id
    @GeneratedValue
    private Long id;

    private String className;

    @ManyToOne(fetch = FetchType.LAZY)
    private User instructor;

    @OneToMany(mappedBy = "classRoom")
    private List<Take> takes;

    private String classDescription;

    private Boolean isOpened;

    private String entryCode;

    private String tag;

    private Boolean isActive;

    @OneToMany(mappedBy = "classRoom")
    private List<Notice> notices = new ArrayList<>();

    @OneToMany(mappedBy = "classRoom")
    private List<Lecture> lectures;

    private LocalDateTime closeDate;
}
