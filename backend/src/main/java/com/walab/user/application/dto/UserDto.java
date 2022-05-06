package com.walab.user.application.dto;

import com.walab.classroom.domain.take.Take;
import com.walab.user.presentation.response.UserResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long userId;
    private String name;
    private String email;

    public UserDto(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public UserResponse userResponse(){
        return new UserResponse(userId, name, email);
    }
}
