package com.walab.content.application.dto;

import com.walab.content.presentation.response.ContentIdResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ContentIdDto {
    private Long contentId;

    public ContentIdResponse contentIdResponse(){
        return new ContentIdResponse(contentId);
    }
}
