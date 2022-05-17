package com.walab.playlist.presentation;

import com.walab.playlist.application.PlaylistService;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.domain.repository.PlaylistRepository;
import com.walab.playlist.presentation.request.PlaylistCreateRequest;
import com.walab.playlist.presentation.response.PlaylistCUResponse;
import com.walab.playlist.presentation.response.PlaylistResponse;
import com.walab.user.domain.repository.UserRepository;
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
    private final UserRepository userRepository;
    @GetMapping
    public ResponseEntity<Object> getPlaylist(@RequestParam Long userId){
        List<MyPlaylistDto> playlists =  playlistService.getPlaylist(userId);
        List<PlaylistResponse> response = playlists.stream().map(MyPlaylistDto::playlistResponse).collect(Collectors.toList());
        return ResponseEntity.ok(response);

    }

    @PostMapping("/create")
    public ResponseEntity<PlaylistCUResponse> createPlaylist(@RequestBody PlaylistCreateRequest request) {
        MyPlaylistDto playlistDto = playlistService.create(request.getUserId(), request.playlistCUDto());
        PlaylistCUResponse response = playlistDto.playlistCUResponse();
        return ResponseEntity.ok(response);
    }
}
