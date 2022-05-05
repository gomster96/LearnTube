package com.walab.classroom.application.dto.take;

import com.walab.classroom.domain.take.Take;
import com.walab.classroom.presentation.response.take.TakeUserResponse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TakeUserDto {
    private Long takeId;
    private Long userId;
    private String name;
    private String email;

    public TakeUserDto(Take take){
        this.takeId = take.getId();
        this.userId = take.getUser().getId();
        this.name = take.getUser().getName();
        this.email = take.getUser().getEmail();
    }

    public TakeUserResponse takeUserResponse(){
        return new TakeUserResponse(takeId, userId, name, email);
    }
}
