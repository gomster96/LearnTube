package com.walab.content.application;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.walab.content.application.dto.*;
import com.walab.content.domain.Content;
import com.walab.content.domain.repository.ContentRepository;
import com.walab.lecture.application.repository.LectureRepository;
import com.walab.lecture.domain.Lecture;
import com.walab.playlist.domain.Playlist;
import com.walab.playlist.domain.repository.PlaylistRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContentService {
    private final ContentRepository contentRepository;
    private final PlaylistRepository playlistRepository;
    private final LectureRepository lectureRepository;

    @Transactional
    public ContentIdDto delete(ContentIdDto contentIdDto) {
        Long deleteId = contentIdDto.getContentId();
        contentRepository.deleteById(deleteId);
        return contentIdDto;
    }

    @Transactional
    public ContentDto create(ContentCUDto contentCreateDto, Long lectureId, Long playlistId) {

        // ToDo playList Repository 개발 후 사용 예정
        //         Lecture lecture = lectureRepository.findById(lectureId).orElseThrow();
        Playlist playlist = new Playlist();
        playlistRepository.save(playlist);
        Lecture lecture = new Lecture();
        lectureRepository.save(lecture);
        // ToDo 각 repository들 개발되면 바꿀 예정

        if (Objects.isNull(playlistId)) {
            Content newContent = new Content(lecture, contentCreateDto);
            Content savedContent = contentRepository.save(newContent);
            return savedContent.toDto();
        }
        // ToDo 각 repository들 개발되면 바꿀 예정
        //        Playlist playlist = playlistRepository.findById(playlistId).orElseThrow();
        Content newContent = new Content(lecture, contentCreateDto, playlist);
        Content savedContent = contentRepository.save(newContent);

        return savedContent.toDto();
    }

    @Transactional
    public ContentDto update(Long contentId, ContentCUDto contentCUDto, Long playlistId) {
        Content content = contentRepository.findById(contentId).orElseThrow();
        Playlist playlist = playlistRepository.findById(playlistId).orElseThrow();
        content.update(contentCUDto, playlist);

        return content.toDto();
    }

    @Transactional
    public ContentDetailDto findById(Long contentId) {


        Content content = contentRepository.findContentById(contentId);
        if (Objects.isNull(content.getPlaylist())) {
            return new ContentDetailDto(content, null);
        }
        List<ContentVideoDto> contentVideoDtos = content.getPlaylist().getVideos()
                                                        .stream()
                                                        .map(ContentVideoDto::new)
                                                        .collect(Collectors.toList());
        ContentPlaylistDto contentPlaylistDto = new ContentPlaylistDto(content.getPlaylist(), contentVideoDtos);

        return new ContentDetailDto(content, contentPlaylistDto);

    }
}
