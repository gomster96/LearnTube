package com.walab.classroom.domain.repository;

import com.walab.classroom.domain.ClassRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long> {
    //ToDo ClassRoom Data 받아오는 query 성능 향상시키기
    // N+1 문제가 발생하지않도록
}
