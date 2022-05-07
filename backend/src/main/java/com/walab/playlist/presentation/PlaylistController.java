package com.walab.playlist.presentation;

import com.walab.playlist.application.PlaylistService;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.domain.repository.PlaylistRepository;
import com.walab.playlist.presentation.response.PlaylistResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
