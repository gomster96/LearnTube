package com.walab.playlist.presentation;
import java.util.List;
import java.util.stream.Collectors;

import com.walab.playlist.application.PlaylistService;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.application.dto.PlaylistDeleteDto;
import com.walab.playlist.domain.repository.PlaylistRepository;
import com.walab.playlist.application.dto.PlaylistNameDto;
import com.walab.playlist.presentation.request.PlaylistDeleteRequest;
import com.walab.playlist.presentation.request.PlaylistUpdateRequest;
import com.walab.playlist.presentation.response.PlaylistDeleteResponse;
import com.walab.playlist.presentation.response.PlaylistNameResponse;
import com.walab.playlist.presentation.request.PlaylistCreateRequest;
import com.walab.playlist.presentation.response.PlaylistCUResponse;
import com.walab.playlist.presentation.response.PlaylistResponse;
import com.walab.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/api/playlist")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PlaylistController {

    private final PlaylistService playlistService;
    private final PlaylistRepository playlistRepository;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<Object> getPlaylist(@RequestParam Long userId) {
        List<MyPlaylistDto> playlists = playlistService.getPlaylist(userId);
        List<PlaylistResponse> response = playlists.stream()
                .map(MyPlaylistDto::playlistResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);

    }

    @PostMapping("/create")
     public ResponseEntity<PlaylistCUResponse> createPlaylist(@RequestBody PlaylistCreateRequest request) {
        MyPlaylistDto playlistDto = playlistService.create(request.getUserId(), request.playlistCUDto());
        PlaylistCUResponse response = playlistDto.playlistCUResponse();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/update")
    public ResponseEntity<PlaylistCUResponse> updatePlaylist(@RequestBody PlaylistUpdateRequest request) {
        MyPlaylistDto updatedPlaylist = playlistService.update(request.getPlaylistId(), request.playlistCUDto());
        PlaylistCUResponse response = updatedPlaylist.playlistCUResponse();
        return ResponseEntity.ok(response);
    }


    //    @PostMapping
    //    public ResponseEntity<PlaylistResponse> createPlaylist(@RequestBody PlaylistCreateRequest request) {
    //        ContentDto createdContent = contentService.create(request.contentCUDto(), request.getLectureId(), request.getPlaylistId());
    //        ContentResponse response = createdContent.contentResponse();
    //        return ResponseEntity.ok(response);
    //    }

    @GetMapping("/name")
    public ResponseEntity<List<PlaylistNameResponse>> getPlaylistNames(@RequestParam Long userId) {
        List<PlaylistNameResponse> response = playlistService.getPlaylistName(userId)
                .stream()
                .map(PlaylistNameDto::playlistNameResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    @PostMapping("/delete")
    public ResponseEntity<PlaylistDeleteResponse> deletePlaylist(@RequestBody PlaylistDeleteRequest request) {
        PlaylistDeleteDto deletedPlaylistDto = playlistService.delete(request.toDto());
        PlaylistDeleteResponse response = deletedPlaylistDto.playlistDeleteResponse();
        return ResponseEntity.ok(response);
    }
}

