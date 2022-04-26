package com.walab.classroom.domain.take;

import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;
import com.walab.user.domain.User;

import lombok.Getter;

@Entity
@Getter
public class Take {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    private int status;
}
