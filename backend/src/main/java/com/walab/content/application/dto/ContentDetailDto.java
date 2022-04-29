package com.walab.content.application.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.walab.content.domain.Content;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ContentDetailDto {
    private Long id;
    private String contentName;
    private String contentDescription;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;
    private ContentPlaylistDto playlist;

    public ContentDetailDto(Content content, ContentPlaylistDto playlist){
        this.id = content.getId();
        this.contentName = content.getContentName();
        this.contentDescription = content.getContentDescription();
        this.openDate = content.getOpenDate();
        this.closeDate = content.getCloseDate();
        this.playlist = playlist;
    }
}
