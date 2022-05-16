package com.walab.video.presentation;

import com.walab.content.application.ContentService;
import com.walab.content.application.dto.ContentDto;
import com.walab.content.presentation.response.ContentResponse;
import com.walab.video.application.VideoService;
import com.walab.video.application.dto.VideoDto;
import com.walab.video.presentation.request.VideoCreateRequest;
import com.walab.video.presentation.response.VideoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/playlist_video/create")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class VideoController {

    private final VideoService videoService;
    @PostMapping
    public ResponseEntity<VideoResponse> createVideo(@RequestBody VideoCreateRequest request) {
        VideoDto createVideo = videoService.create(request.videoCUDto(), request.getPlaylistId());
        VideoResponse response = createVideo.videoResponse();
        return ResponseEntity.ok(response);
    }

}
