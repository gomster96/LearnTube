package com.walab.classroom.application.dto.take;

import java.time.LocalDateTime;

import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.take.Take;
import com.walab.classroom.presentation.response.ClassRoomDashboardResponse;
import com.walab.classroom.presentation.response.ClassRoomManagedResponse;

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
    private boolean isActive;
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

    public TakeClassRoomDto(ClassRoom classRoom){
        this.classId = classRoom.getId();
        this.className = classRoom.getClassName();
        this.instructorName = classRoom.getInstructor().getName();
        this.lastestNotice = classRoom.getLastestNoticeTitle();
        // ToDo N+1 발생 예정 해결법 찾기 getTake한번당 한번 쿼리 발생
        this.isActive = classRoom.getIsActive();
        this.numberOfTake = classRoom.getTakes().size();
        this.classRoomRegDate = classRoom.getCreatedAt();
    }

    public ClassRoomDashboardResponse classRoomTakeResponse() {
        return new ClassRoomDashboardResponse(classId, className, instructorName, videoCheck, lastestNotice, numberOfTake, classRoomRegDate);
    }

    public ClassRoomManagedResponse classRoomManagedResponse(){
        return new ClassRoomManagedResponse(classId, className, instructorName, lastestNotice, numberOfTake, isActive ,classRoomRegDate);
    }
}
