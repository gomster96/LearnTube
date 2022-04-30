package com.walab.notice.domain;

import java.time.LocalDateTime;
import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Notice {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    private String title;

    private String content;

    private LocalDateTime modDate;
}
