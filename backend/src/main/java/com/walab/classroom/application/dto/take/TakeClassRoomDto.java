package com.walab.classroom.application.dto.take;

import java.time.LocalDateTime;

import com.walab.classroom.domain.take.Take;
import com.walab.classroom.presentation.response.ClassRoomTakeResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TakeClassRoomDto {
    private Long classId;
    private String className;
    private String instructorName;
    private int videoCheck;
    private String lastestNotice;
    private int numberOfTake;
    private LocalDateTime classRoomRegDate;

    public TakeClassRoomDto(Take take) {
        this.classId = take.getClassRoom().getId();
        this.className = take.getClassRoom().getClassName();
        this.instructorName = take.getClassRoom().getInstructor().getName();
        // ToDo 캡스톤 팀 개발 후 처리 User와 뭔가 관계가 있어야함
        this.videoCheck = 50;
        this.lastestNotice = take.getClassRoom().getLastestNoticeTitle();
        // ToDo N+1 발생 예정 해결법 찾기 getTake한번당 한번 쿼리 발생
        this.numberOfTake = take.getClassRoom().getTakes().size();
        this.classRoomRegDate = take.getClassRoom().getCreatedAt();
    }

    public ClassRoomTakeResponse classRoomTakeResponse() {
        return new ClassRoomTakeResponse(classId, className, instructorName, videoCheck, lastestNotice, numberOfTake, classRoomRegDate);
    }
}
