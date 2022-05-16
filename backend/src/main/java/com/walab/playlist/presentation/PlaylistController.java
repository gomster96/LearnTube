package com.walab.playlist.presentation;

import com.walab.content.application.dto.ContentDto;
import com.walab.content.presentation.request.ContentCreateRequest;
import com.walab.content.presentation.response.ContentResponse;
import com.walab.playlist.application.PlaylistService;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.domain.repository.PlaylistRepository;
import com.walab.playlist.presentation.response.PlaylistResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/playlist")
@RequiredArgsConstructor
public class PlaylistController {

    private final PlaylistService playlistService;
    private final PlaylistRepository playlistRepository;

    @GetMapping
    public ResponseEntity<Object> getPlaylist(@RequestParam Long userId){
        List<MyPlaylistDto> playlists =  playlistService.getPlaylist(userId);
        List<PlaylistResponse> response = playlists.stream().map(MyPlaylistDto::playlistResponse).collect(Collectors.toList());
        return ResponseEntity.ok(response);

    }

//    @PostMapping
//    public ResponseEntity<PlaylistResponse> createPlaylist(@RequestBody PlaylistCreateRequest request) {
//        ContentDto createdContent = contentService.create(request.contentCUDto(), request.getLectureId(), request.getPlaylistId());
//        ContentResponse response = createdContent.contentResponse();
//        return ResponseEntity.ok(response);
//    }
}
