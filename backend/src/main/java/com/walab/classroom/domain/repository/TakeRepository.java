package com.walab.classroom.domain.repository;

import java.util.List;

import com.walab.classroom.domain.take.Take;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TakeRepository extends JpaRepository<Take, Long> {
    @Query("select t from Take t " +
            "left join fetch t.user " +
            "where t.classRoom.id = :classId " +
            "and t.status = 0 ")
    List<Take> getWaitTakeByClassId(@Param("classId") Long classId);

    @Query("select distinct t from Take t " +
            "left join fetch t.user as u " +
            "left join fetch  t.classRoom as c " +
            "left join fetch c.instructor " +
            "left join fetch c.notices " +
            "where u.id = :userId " +
            "and c.isActive = :isActive " +
            "and t.status = 1")
    List<Take> findDashboardTakeByUserId(@Param("userId") Long userId, @Param("isActive") boolean isActive);

    @Modifying(clearAutomatically = true)
    @Query("update Take t set t.status = 1 where t.classRoom.id = :classId")
    void changeStatusByClassID(@Param("classId") Long classId);

    @Modifying(clearAutomatically = true)
    @Query("update Take t set t.deleted = 1 where t.classRoom.id = :classId")
    void deleteWaitTakeByClassId(@Param("classId") Long classId);
}
