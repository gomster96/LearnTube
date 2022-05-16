package com.walab.playlist.domain.repository;

import com.walab.playlist.domain.Playlist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlaylistRepository extends JpaRepository<Playlist, Long> {

    @Query("select p from Playlist p " +
            "left join fetch p.videos as v " +
            "where p.id = :id")
    Playlist findPlaylistById(@Param("id")Long Id);

}
