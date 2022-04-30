package com.walab.lecture.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;
import com.walab.content.domain.Content;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Lecture {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private int lectureNum;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    @OneToMany(mappedBy = "lecture")
    private List<Content> contents = new ArrayList<>();

    private LocalDateTime modDate;
}
