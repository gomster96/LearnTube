package com.walab.notice.applecation;

import com.walab.notice.domain.repository.NoticeRepository;
import com.walab.notice.domain.Notice;
import com.walab.notice.domain.request.NoticeCreationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;
    
    public Notice createNotice(NoticeCreationRequest request){
        Notice notice = new Notice();
        BeanUtils.copyProperties(request, notice);
        return noticeRepository.save(notice);
    }

    public Notice readNotice(long id) {
        Optional<Notice> notice = noticeRepository.findById(id);
        if(notice.isPresent()) {
            return notice.get();
        }
        throw new EntityNotFoundException(
                "Can't find any book under given id"
        );
    }

    public List<Notice> readNotices() {
        return noticeRepository.findAll();
    }


    public Notice updateNotice(Long noticeId, NoticeCreationRequest request) {
        Optional<Notice> optionalNotice = noticeRepository.findById(noticeId);
        if (!optionalNotice.isPresent()){
            throw new EntityNotFoundException(
                    "Member not present in the database"
            );
        }
        Notice notice = optionalNotice.get();
        notice.setTitle(request.getTitle());
        notice.setContent(request.getContent());
        notice.setModDate(request.getModDate());
        return noticeRepository.save(notice);
    }

    public void deleteNotice(Long id) {
        noticeRepository.deleteById(id);
    }

}
