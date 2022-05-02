package com.walab.notice.application.dto;

import com.walab.classroom.domain.ClassRoom;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
public class NoticeClassRoomDto {
    private Long id;
    private List<NoticeReadListDto> notices;

    public NoticeClassRoomDto(Optional<ClassRoom> classRoom, List<NoticeReadListDto> notices){
        this.id = classRoom.get().getId();
        this.notices = notices;
    }

}
