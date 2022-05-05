package com.walab.classroom.domain.repository;

import java.util.List;

import com.walab.classroom.domain.take.Take;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TakeRepository extends JpaRepository<Take, Long> {
    @Query("select t from Take t " +
            "left join fetch t.user " +
            "where t.classRoom.id = :classId " +
            "and t.status = 0 ")
    List<Take> getWaitTakeByClassId(@Param("classId") Long classId);
}
