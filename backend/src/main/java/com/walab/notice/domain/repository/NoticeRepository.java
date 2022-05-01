package com.walab.notice.domain.repository;

import com.walab.notice.applecation.dto.NoticeDetailDto;
import com.walab.notice.domain.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {
    List<Notice> findNoticeById(Long Id);

    List<NoticeDetailDto> findNoticesById(Long id);
}
