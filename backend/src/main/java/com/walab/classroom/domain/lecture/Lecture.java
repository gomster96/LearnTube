package com.walab.classroom.domain.lecture;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.lecture.content.Content;

import lombok.Getter;

@Entity
@Getter
public class Lecture {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private int lectureNum;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    @OneToMany(mappedBy = "lecture")
    private List<Content> contents;

    private LocalDateTime modDate;
}
