package com.walab.classroom.domain.repository;

import com.walab.classroom.domain.ClassRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long> {

    @Query("select distinct c from ClassRoom c " +
            "left join fetch c.instructor as i " +
            "left join fetch c.notices " +
            "where i.id = :instructorId ")
    List<ClassRoom> findClassRoomByInstructorId(@Param("instructorId") Long instructorId);

    //ToDo ClassRoom Data 받아오는 query 성능 향상시키기
    // N+1 문제가 발생하지않도록

}
