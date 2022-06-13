package com.walab.video.presentation;

import com.walab.content.application.ContentService;
import com.walab.content.application.dto.ContentDto;
import com.walab.content.presentation.response.ContentResponse;
import com.walab.video.application.VideoService;
import com.walab.video.application.dto.VideoCUDto;
import com.walab.video.application.dto.VideoDeleteDto;
import com.walab.video.application.dto.VideoDto;
import com.walab.video.domain.repository.VideoRepository;
import com.walab.video.presentation.request.VideoCreateRequest;
import com.walab.video.presentation.request.VideoDeleteRequest;
import com.walab.video.presentation.request.VideoUpdateRequest;
import com.walab.video.presentation.response.VideoDeleteResponse;
import com.walab.video.presentation.response.VideoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/playlist_video")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class VideoController {

    private final VideoService videoService;
    @PostMapping("/create")
    public ResponseEntity<VideoResponse> createVideo(@RequestBody VideoCreateRequest request) {
        VideoDto createVideo = videoService.create(request.videoCUDto(), request.getPlaylistId());
        VideoResponse response = createVideo.videoResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<VideoDeleteResponse> deleteVideo(@RequestBody VideoDeleteRequest request) {
        VideoDeleteDto deleteDto = videoService.delete(request.toVideoDeleteDto());
        VideoDeleteResponse response = deleteDto.contentIdResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/update")
    public ResponseEntity<VideoResponse> updateVideo(@RequestBody VideoUpdateRequest request) {
        VideoDto updatedVideo = videoService.update(request.getVideoId(), request.videoCUDto());
        VideoResponse response = updatedVideo.videoResponse();
        return ResponseEntity.ok(response);
    }
}
