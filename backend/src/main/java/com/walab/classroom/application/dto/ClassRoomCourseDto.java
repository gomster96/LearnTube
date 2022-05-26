package com.walab.classroom.application.dto;

import java.time.LocalDateTime;

import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.presentation.response.ClassRoomCourseResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClassRoomCourseDto {
    private Long classId;
    private String className;
    private String instructorName;
    private int numberOfTake;
    private int totalPage;
    private String image;
    private LocalDateTime classRoomRegDate;

    public ClassRoomCourseDto(ClassRoom classRoom, int totalPage) {
        this.classId = classRoom.getId();
        this.className = classRoom.getClassName();
        this.instructorName = classRoom.getInstructor().getName();
        this.numberOfTake = classRoom.getTakes().size();
        this.totalPage = totalPage;
        this.image = classRoom.getImage();
        this.classRoomRegDate = classRoom.getCreatedAt();
    }

    public ClassRoomCourseResponse classRoomCourseResponse() {
        return new ClassRoomCourseResponse(classId, className, instructorName, numberOfTake, totalPage, image, classRoomRegDate);
    }
}
