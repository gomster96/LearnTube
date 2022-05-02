package com.walab.notice.domain.repository;

import com.walab.notice.application.dto.NoticeDetailDto;
import com.walab.notice.domain.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {
    List<Notice> findNoticeById(Long Id);

    List<NoticeDetailDto> findNoticesById(Long id);
}
