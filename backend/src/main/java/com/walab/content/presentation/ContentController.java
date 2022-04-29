package com.walab.content.presentation;

import com.walab.content.application.ContentService;
import com.walab.content.application.dto.ContentDto;
import com.walab.content.application.dto.ContentIdDto;
import com.walab.content.presentation.request.ContentDeleteRequest;
import com.walab.content.presentation.request.ContentCreateRequest;
import com.walab.content.presentation.response.ContentIdResponse;
import com.walab.content.presentation.response.ContentResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ContentController {
    private final ContentService contentService;

    @DeleteMapping("/content")
    public ResponseEntity<ContentIdResponse> deleteContent(@RequestBody ContentDeleteRequest request) {
        ContentIdDto deletedContentIdDto = contentService.delete(request.toDto());
        ContentIdResponse response = deletedContentIdDto.contentIdResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/content")
    public ResponseEntity<ContentResponse> createContent(@RequestBody ContentCreateRequest request) {
        ContentDto createdContent = contentService.create(request.contentCreateDto(), request.getLectureId(), request.getPlaylistId());
        ContentResponse response = createdContent.contentResponse();
        return ResponseEntity.ok(response);
    }
}
