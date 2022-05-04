package com.walab.classroom.application.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.walab.classroom.presentation.response.ClassRoomCreateResponse;
import com.walab.lecture.application.dto.LectureDto;
import com.walab.notice.application.dto.NoticeDetailDto;
import com.walab.user.application.dto.UserDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassRoomDto {
    private Long classId;
    private String className;
    private String classDescription;
    private LocalDateTime closeDate;
    private Boolean isOpened;
    private String entryCode;
    private Boolean isActive;
    private LocalDateTime classRoomRegDate;
    private UserDto instructor;
    private List<LectureDto> lectures;
    private List<NoticeDetailDto> notices;

    public ClassRoomCreateResponse classRoomCreateResponse() {
        return new ClassRoomCreateResponse(classId, className, classDescription, isOpened, entryCode, isActive,
                instructor.getUserId(), instructor.getName(), classRoomRegDate, closeDate);
    }
}
