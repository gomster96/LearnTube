package com.walab.playlist.application;

import com.walab.content.application.dto.ContentPlaylistDto;
import com.walab.exception.user.UserNotFoundException;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.application.dto.PlaylistCUDto;
import com.walab.playlist.domain.Playlist;
import com.walab.playlist.domain.repository.PlaylistRepository;
import com.walab.user.domain.User;
import com.walab.user.domain.repository.UserRepository;
import com.walab.video.domain.Video;
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
    //private final VideoRepository videoRepository;

    public List<MyPlaylistDto> getPlaylist(Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        List<Playlist> playlists = user.getPlaylists();
//        for (Playlist playlist: playlists) {
//            List<Video> videos = videoRepository.findById(playlist.getId());
//        }
        List<MyPlaylistDto> playlist = playlists.stream().map(Playlist::myPlaylistDto).collect(Collectors.toList());

        return playlist;
    }

    public MyPlaylistDto create(Long userId, PlaylistCUDto playlistCUDto) {
        User user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        Playlist newPlaylist = new Playlist(user, playlistCUDto);
        Playlist savedPlaylist = playlistRepository.save(newPlaylist);
        return savedPlaylist.toCreateResponseDto();
    }

}
