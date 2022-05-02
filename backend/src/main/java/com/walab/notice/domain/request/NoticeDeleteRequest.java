package com.walab.notice.domain.request;

import com.walab.notice.application.dto.NoticeIdDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoticeDeleteRequest {
    private Long noticeId;

    public NoticeIdDto toDto(){
        return new NoticeIdDto(noticeId);
    }
}
