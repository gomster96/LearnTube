package com.walab.classroom.presentation.response.take;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TakeUserResponse {
    private Long takeId;
    private Long userId;
    private String name;
    private String email;
}
