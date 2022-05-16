package com.walab.video.domain.repository;

import com.walab.content.domain.Content;
import com.walab.video.domain.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VideoRepository extends JpaRepository<Video, Long> {
    @Query("select v from Video v " +
            "where v.id = :videoId")
    Content findContentById(@Param("videoId") Long videoId);
}
