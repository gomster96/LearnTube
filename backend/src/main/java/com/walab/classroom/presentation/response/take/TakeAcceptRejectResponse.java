package com.walab.classroom.presentation.response.take;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TakeAcceptRejectResponse {
    private Long takeId;
    private String username;
    private String email;
}
