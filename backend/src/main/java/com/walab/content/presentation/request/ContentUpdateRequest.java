package com.walab.content.presentation.request;

import java.time.LocalDateTime;

import com.walab.content.application.dto.ContentCUDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContentUpdateRequest {
    private Long contentId;
    private String contentName;
    private String contentDescription;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;
    private Long playlistId;

    public ContentCUDto contentCUDto() {
        return new ContentCUDto(this);
    }
}
