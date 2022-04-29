package com.walab.content.application.dto;

import java.time.LocalDateTime;

import com.walab.content.presentation.request.ContentCreateRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ContentCreateDto {
    private String contentName;
    private String contentDescription;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;


    public ContentCreateDto(ContentCreateRequest contentRequest) {
        this.contentName = contentRequest.getContentName();
        this.contentDescription = contentRequest.getContentDescription();
        this.openDate = contentRequest.getOpenDate();
        this.closeDate = contentRequest.getCloseDate();
    }
}
