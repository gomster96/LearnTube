package com.walab.content.domain.repository;

import com.walab.content.domain.Content;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ContentRepository extends JpaRepository<Content, Long> {
    @Query("select c from Content c " +
            "left join fetch c.playlist as p " +
            "left join fetch p.videos as v " +
            "where c.id = :contentId")
    Content findContentById(@Param("contentId") Long contentId);
}