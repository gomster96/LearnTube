package com.walab.playlist.domain.repository;

import com.walab.notice.domain.Notice;
import com.walab.playlist.domain.Playlist;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaylistRepository extends JpaRepository<Playlist, Long> {

    List<Playlist> findPlaylistById(Long Id);
}
