package com.walab.notice.presentation;

import com.walab.notice.applecation.NoticeService;
import com.walab.notice.domain.Notice;
import com.walab.notice.domain.request.NoticeCreationRequest;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api")
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;

    @PostMapping(value = "notice")
    public ResponseEntity<Notice> createNotice (@RequestBody NoticeCreationRequest request) {
        return ResponseEntity.ok(noticeService.createNotice(request));
    }

    @GetMapping(value = "notice")
    public ResponseEntity readNotices(@RequestParam(required = false) Long id){
        if(id==null) {
            return ResponseEntity.ok(noticeService.readNotices());
        }
        return ResponseEntity.ok(noticeService.readNotice(id));
    }

    @GetMapping(value = "notice/{id}")
    public ResponseEntity<Notice> readNotice(@PathVariable Long id){
        return ResponseEntity.ok(noticeService.readNotice(id));
    }

    @PatchMapping(value ="notice/{id}")
    public ResponseEntity<Notice> updateNotice (@RequestBody NoticeCreationRequest request, @PathVariable Long id) {
        return ResponseEntity.ok(noticeService.updateNotice(id, request));
    }

    @DeleteMapping("notice/{id}")
    public ResponseEntity<HttpStatus> deleteNotice (@PathVariable Long id){
        noticeService.deleteNotice(id);
        return ResponseEntity.ok().build();
    }
}

