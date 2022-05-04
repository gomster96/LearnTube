package com.walab.classroom.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.*;

import com.walab.classroom.application.dto.ClassRoomCUDto;
import com.walab.classroom.application.dto.ClassRoomDto;
import com.walab.common.BaseEntity;
import com.walab.lecture.application.dto.LectureDto;
import com.walab.lecture.domain.Lecture;
import com.walab.notice.application.dto.NoticeDetailDto;
import com.walab.notice.domain.Notice;
import com.walab.classroom.domain.take.Take;
import com.walab.user.domain.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Getter
@NoArgsConstructor
@SQLDelete(sql = "UPDATE class_room SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class ClassRoom extends BaseEntity {
    @Id
    @GeneratedValue
    private Long id;

    private String className;

    @ManyToOne(fetch = FetchType.LAZY)
    private User instructor;

    @OneToMany(mappedBy = "classRoom")
    private List<Take> takes = new ArrayList<>();

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

    public ClassRoom(ClassRoomCUDto classRoomCUDto) {
        this.className = classRoomCUDto.getClassName();
        this.classDescription = classRoomCUDto.getClassDescription();
        this.isOpened = classRoomCUDto.getIsOpened();
        this.entryCode = classRoomCUDto.getEntryCode();
        this.isActive = classRoomCUDto.getIsActive();
        this.closeDate = classRoomCUDto.getCloseDate();
    }

    public ClassRoom(User instructor, ClassRoomCUDto classRoomCUDto) {
        this(classRoomCUDto);
        this.instructor = instructor;
    }

    public void update(ClassRoomCUDto dto) {
        this.className = dto.getClassName();
        this.classDescription = dto.getClassDescription();
        this.closeDate = dto.getCloseDate();
        this.isOpened = dto.getIsOpened();
        this.entryCode = dto.getEntryCode();
        this.isActive = dto.getIsActive();
    }

    public ClassRoomDto toCreatResponseDto() {
        return ClassRoomDto.builder()
                           .classId(this.id)
                           .className(this.className)
                           .classDescription(this.classDescription)
                           .isOpened(isOpened)
                           .entryCode(entryCode)
                           .isActive(isActive)
                           .instructor(this.instructor.toDto())
                           .classRoomRegDate(this.getCreatedAt())
                           .closeDate(this.closeDate)
                           .build();
    }

    public ClassRoomDto toUpdateResponseDto() {
        return ClassRoomDto.builder()
                           .classId(this.id)
                           .className(this.className)
                           .classDescription(this.classDescription)
                           .isOpened(this.isOpened)
                           .entryCode(this.entryCode)
                           .isActive(this.isActive)
                           .closeDate(this.closeDate)
                           .build();
    }

    public ClassRoomDto toDto() {
        List<LectureDto> lectureDtos = this.lectures.stream()
                                                    .sorted((l1, l2) -> Integer.compare(l1.getLectureNum(), l2.getLectureNum()))
                                                    .map(Lecture::toDto)
                                                    .collect(Collectors.toList());
        List<NoticeDetailDto> noticeDetailDtos = this.notices.stream()
                                                             .map(NoticeDetailDto::new)
                                                             .collect(Collectors.toList());
        return ClassRoomDto.builder()
                           .classId(this.id)
                           .className(this.className)
                           .classDescription(this.classDescription)
                           .closeDate(closeDate)
                           .isOpened(isOpened)
                           .isActive(isActive)
                           .classRoomRegDate(getCreatedAt())
                           .instructor(this.instructor.toDto())
                           .lectures(lectureDtos)
                           .notices(noticeDetailDtos)
                           .build();
    }
}
