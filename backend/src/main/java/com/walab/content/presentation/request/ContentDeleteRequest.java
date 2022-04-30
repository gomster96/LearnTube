package com.walab.content.presentation.request;

import com.walab.content.application.dto.ContentIdDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContentDeleteRequest {
    private Long contentId;

    public ContentIdDto toDto(){
        return new ContentIdDto(contentId);
    }
}
