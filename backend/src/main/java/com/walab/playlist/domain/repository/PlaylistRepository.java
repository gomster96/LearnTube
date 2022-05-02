package com.walab.playlist.domain.repository;

import com.walab.playlist.domain.Playlist;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
}
