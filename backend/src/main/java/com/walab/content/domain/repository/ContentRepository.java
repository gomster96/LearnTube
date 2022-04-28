package com.walab.content.domain.repository;

import com.walab.content.domain.Content;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContentRepository extends JpaRepository<Content, Long> {
}