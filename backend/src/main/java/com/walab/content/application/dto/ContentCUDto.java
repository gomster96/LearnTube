package com.walab.content.application.dto;

import java.time.LocalDateTime;

import com.walab.content.presentation.request.ContentCreateRequest;
import com.walab.content.presentation.request.ContentUpdateRequest;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ContentCUDto {
    private String contentName;
    private String contentDescription;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;


    public ContentCUDto(ContentCreateRequest contentRequest) {
        this.contentName = contentRequest.getContentName();
        this.contentDescription = contentRequest.getContentDescription();
        this.openDate = contentRequest.getOpenDate();
        this.closeDate = contentRequest.getCloseDate();
    }

    public ContentCUDto(ContentUpdateRequest contentRequest){
        this.contentName = contentRequest.getContentName();
        this.contentDescription = contentRequest.getContentDescription();
        this.openDate = contentRequest.getOpenDate();
        this.closeDate = contentRequest.getCloseDate();
    }
}
