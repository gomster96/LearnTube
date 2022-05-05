package com.walab.classroom.domain.take;

import javax.persistence.*;

import com.walab.classroom.domain.ClassRoom;
import com.walab.common.BaseEntity;
import com.walab.user.domain.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@SQLDelete(sql = "UPDATE take SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Take extends BaseEntity {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    private int status = 0;

    public Take(User user, ClassRoom classRoom){
        this.user = user;
        this.classRoom = classRoom;
        user.addTake(this);
        classRoom.addTake(this);
    }
}
