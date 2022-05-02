package com.walab.notice.presentation.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor

public class NoticeIdResponse {
    private Long noticeId;

    @Builder
    public NoticeIdResponse(Long id){
        this.noticeId=id;
    }

    public NoticeIdResponse noticeIdResponse(Long noticeId) {
        this.noticeId = noticeId;
        return noticeIdResponse(noticeId);
    }
}
