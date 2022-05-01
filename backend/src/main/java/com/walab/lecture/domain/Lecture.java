package com.walab.lecture.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;
import com.walab.content.application.dto.ContentDto;
import com.walab.content.domain.Content;

import com.walab.lecture.application.dto.LectureCreateDto;
import com.walab.lecture.application.dto.LectureDto;
import lombok.*;

@Entity
@Getter
@Setter
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
    private List<Content> contents;

    private LocalDateTime modDate;

    public Lecture(ClassRoom classRoom, LectureCreateDto lectureCreateDto) {
        addClassRoom(classRoom);
        this.modDate = LocalDateTime.now();
        setLectureDatas(lectureCreateDto);
    }

    public Lecture(ClassRoom classRoom, LectureCreateDto lectureCreateDto, Content contents) {
        this(classRoom, lectureCreateDto);
        addContents(contents);
    }

    private void addClassRoom(ClassRoom classRoom) {
        this.classRoom = classRoom;
        classRoom.getLectures().add(this);
    }
    public void addContents(Content contents) {
        this.contents.add(contents);
    }

    public void setLectureDatas(LectureCreateDto lectureCreateDto) {
        this.lectureNum = lectureCreateDto.getLectureNum();
    }

    public LectureDto toDto() {
//        if (Objects.isNull(this.getContents()) {
            return new LectureDto(this.id, this.lectureNum, this.modDate, null);
//        }
//        return new LectureDto(this.id, this.lectureNum, this.modDate, this.contents.getId());

    }
}