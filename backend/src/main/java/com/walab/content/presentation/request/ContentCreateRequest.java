package com.walab.content.presentation.request;

import java.time.LocalDateTime;

import com.walab.content.application.dto.ContentCreateDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContentCreateRequest {
    private Long lectureId;
    private String contentName;
    private String contentDescription;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;
    private Long playlistId;

    public ContentCreateDto contentCreateDto(){
        return new ContentCreateDto(this);
    }
}
