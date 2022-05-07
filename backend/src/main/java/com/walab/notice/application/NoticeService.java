package com.walab.notice.application;

import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.repository.ClassRoomRepository;
import com.walab.notice.application.dto.*;
import com.walab.notice.domain.repository.NoticeRepository;
import com.walab.notice.domain.Notice;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;
    private final ClassRoomRepository classRoomRepository;

    @Transactional
    public NoticeDto createNotice(NoticeCUDto noticeCreateDto, Long classId) {

        ClassRoom classRoom = classRoomRepository.findById(classId).orElseThrow();
        Notice notice = new Notice(classRoom, noticeCreateDto);
        Notice saveNotice = noticeRepository.save(notice);

        return saveNotice.toDto();
    }

    @Transactional
    public NoticeDto updateNotice(Long noticeId, NoticeCUDto noticeUpdateDto) {
        Notice updateNotice = noticeRepository.findById(noticeId).orElseThrow();
        updateNotice.update(noticeUpdateDto);
        return updateNotice.toDto();
    }

    @Transactional
    public NoticeIdDto delete(NoticeIdDto noticeIdDto) {
        Long deleteId = noticeIdDto.getNoticeId();
        noticeRepository.deleteById(deleteId);
        return noticeIdDto;
    }

    @Transactional
    public List<NoticeDetailDto> getNotices(Long classId) {
        ClassRoom result = classRoomRepository.findById(classId).orElseThrow();
        return result.getNotices()
                     .stream()
                     .sorted((n1, n2) -> n2.getModDate().compareTo(n1.getModDate()))
                     .map(NoticeDetailDto::new)
                     .collect(Collectors.toList());
    }
}
