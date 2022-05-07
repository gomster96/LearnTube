package com.walab.playlist.application;

import com.walab.content.application.dto.ContentPlaylistDto;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.domain.Playlist;
import com.walab.playlist.domain.repository.PlaylistRepository;
import com.walab.user.domain.User;
import com.walab.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaylistService {
    private final PlaylistRepository playlistRepository;
    private final UserRepository userRepository;

    public List<MyPlaylistDto> getPlaylist(Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        List<Playlist> playlists = user.getPlaylists();

        List<MyPlaylistDto> playlist = playlists.stream().map(Playlist::myPlaylistDto).collect(Collectors.toList());

        return playlist;
    }
}
