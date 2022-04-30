package com.walab.notice.domain.repository;

public interface NoticeDto {
    Long getNoticeId();
    String getNoticeTitle();
    String getNoticeContent();
    String getNoticeModDate();
}
