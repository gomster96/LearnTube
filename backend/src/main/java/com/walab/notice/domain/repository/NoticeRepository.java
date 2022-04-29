package com.walab.notice.domain.repository;

import com.walab.notice.domain.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
    Optional<Notice> findById(Long id);

    List<Notice> findNoticeById(Long Id);


}
