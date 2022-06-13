package com.walab.content.presentation;

import com.walab.content.application.ContentService;
import com.walab.content.application.dto.ContentDetailDto;
import com.walab.content.application.dto.ContentDto;
import com.walab.content.application.dto.ContentIdDto;
import com.walab.content.presentation.request.ContentCreateRequest;
import com.walab.content.presentation.request.ContentDeleteRequest;
import com.walab.content.presentation.request.ContentUpdateRequest;
import com.walab.content.presentation.response.ContentIdResponse;
import com.walab.content.presentation.response.ContentResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/content")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ContentController {
    private final ContentService contentService;

    @PostMapping("/delete")
    public ResponseEntity<ContentIdResponse> deleteContent(@RequestBody ContentDeleteRequest request) {
        ContentIdDto deletedContentIdDto = contentService.delete(request.toDto());
        ContentIdResponse response = deletedContentIdDto.contentIdResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<ContentResponse> createContent(@RequestBody ContentCreateRequest request) {
        ContentDto createdContent = contentService.create(request.contentCUDto(), request.getLectureId(), request.getPlaylistId());
        ContentResponse response = createdContent.contentResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/update")
    public ResponseEntity<ContentResponse> updateContent(@RequestBody ContentUpdateRequest request) {
        ContentDto updatedContent = contentService.update(request.getContentId(), request.contentCUDto(), request.getPlaylistId());
        ContentResponse response = updatedContent.contentResponse();
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<ContentDetailDto> getContent(@RequestParam Long contentId) {
        ContentDetailDto response = contentService.findById(contentId);

        return ResponseEntity.ok(response);
    }
}
