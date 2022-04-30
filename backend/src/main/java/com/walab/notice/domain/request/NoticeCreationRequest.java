package com.walab.notice.domain.request;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class NoticeCreationRequest {
    private String title;
    private String content;
    private LocalDateTime modDate;
}
