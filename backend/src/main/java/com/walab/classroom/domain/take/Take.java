package com.walab.classroom.domain.take;

import javax.persistence.*;

import com.walab.classroom.application.dto.take.TakeUserDto;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private ClassRoom classRoom;

    // ToDo 나중에는 status를 0으로 바꾸어서 승인이 되면 1로 바꾸도록 구현해야함
    // 현재는 수강 신청만 누르면 바로 수강신청이 되도록 만들어 놓기만 함
    private int status = 1;

    public Take(User user, ClassRoom classRoom) {
        this.user = user;
        this.classRoom = classRoom;
        user.addTake(this);
        classRoom.addTake(this);
    }

    public void acceptTake(){
        this.status = 1;
    }
    public void rejectTake() { this.status = 2;}
    public TakeUserDto toTakeUserDto() {
        return new TakeUserDto(this);
    }
}
