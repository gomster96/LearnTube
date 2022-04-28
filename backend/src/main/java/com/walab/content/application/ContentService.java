package com.walab.content.application;

import com.walab.content.domain.repository.ContentRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ContentService {
    private final ContentRepository contentRepository;
}
