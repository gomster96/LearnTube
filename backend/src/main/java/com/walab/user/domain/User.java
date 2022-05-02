package com.walab.user.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.take.Take;
import com.walab.playlist.domain.Playlist;
import com.walab.user.application.dto.UserDto;
import com.walab.user.application.videocheck.VideoCheck;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    @OneToMany(mappedBy = "user")
    private List<VideoCheck> videoChecks = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Playlist> playlists = new ArrayList<>();

    @OneToMany(mappedBy = "instructor")
    private List<ClassRoom> teachClasses = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Take> takes = new ArrayList<>();

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public UserDto toDto(){
        return new UserDto(id, name, email);
    }


}
