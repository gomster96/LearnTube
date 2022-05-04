package com.walab.lecture.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;
import com.walab.common.BaseEntity;
import com.walab.content.domain.Content;

import com.walab.lecture.application.dto.LectureCreateDto;
import com.walab.lecture.application.dto.LectureDataDto;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SQLDelete(sql = "UPDATE lecture SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Lecture extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    private int lectureNum;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    @OneToMany(mappedBy = "lecture")
    private List<Content> contents = new ArrayList<>();

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

    public LectureDataDto toLectureDataDto() {
            return new LectureDataDto(this.id, this.lectureNum, this.modDate);
    }
}