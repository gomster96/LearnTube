package com.walab.content.presentation;

import com.walab.content.application.ContentService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/content")
@RequiredArgsConstructor
public class ContentController {
    private final ContentService contentService;
}
