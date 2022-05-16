package com.walab.video.application;

import com.walab.content.application.dto.ContentDto;
import com.walab.content.domain.Content;
import com.walab.playlist.domain.Playlist;
import com.walab.playlist.domain.repository.PlaylistRepository;
import com.walab.video.application.dto.VideoCUDto;
import com.walab.video.application.dto.VideoDto;
import com.walab.video.domain.Video;
import com.walab.video.domain.repository.VideoRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class VideoService {
    private final VideoRepository videoRepository;
    private final PlaylistRepository playlistRepository;

    @Transactional
    public VideoDto create(VideoCUDto videoCUDto, Long playlistId) {

        Playlist playlist = playlistRepository.findPlaylistById(playlistId);
        Video newVideo = new Video(videoCUDto, playlist);
        Video savedVideo = videoRepository.save(newVideo);

        return savedVideo.toDto();
    }


}
