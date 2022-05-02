package com.walab.notice.application.dto;


import com.walab.notice.presentation.response.NoticeIdResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NoticeIdDto {
    private Long noticeId;

    public NoticeIdResponse noticeIdResponse() {
        return new NoticeIdResponse(noticeId);
    }

}
