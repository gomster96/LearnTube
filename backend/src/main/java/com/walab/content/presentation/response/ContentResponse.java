package com.walab.content.presentation.response;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContentResponse {
    private Long contentId;
    private String contentName;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;
    private Long playlistId;
}
