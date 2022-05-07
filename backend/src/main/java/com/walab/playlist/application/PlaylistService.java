package com.walab.playlist.application;

import com.walab.classroom.application.dto.take.TakeClassRoomDto;
import com.walab.playlist.application.dto.MyPlaylistDto;
import com.walab.playlist.domain.repository.PlaylistRepository;
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

//    @Transactional
//    public List<MyPlaylistDto> getPlaylist(Long userId){
//        List<MyPlaylistDto> result = playlistRepository.findPlaylistById(userId).orElseThrow();
//        return result.stream().map(MyPlaylistDto::new).collect(Collectors.toList());
//    }
}
