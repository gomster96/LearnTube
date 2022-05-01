package com.walab.notice.applecation.dto;


import com.walab.notice.domain.request.NoticeUpdateRequest;
import com.walab.notice.presentation.response.NoticeIdResponse;
import com.walab.notice.presentation.response.NoticeResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NoticeIdDto {
    private Long noticeId;

    public NoticeIdResponse noticeIdResponse() {
        return new NoticeIdResponse(noticeId);
    }

}
