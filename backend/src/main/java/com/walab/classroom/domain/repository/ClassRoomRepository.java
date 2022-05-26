package com.walab.classroom.domain.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import com.walab.classroom.domain.ClassRoom;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long>, ClassRoomRepositoryCustom {

    @Query("select distinct c from ClassRoom c " +
            "left join fetch c.instructor as i " +
            "left join fetch c.notices " +
            "where i.id = :instructorId ")
    List<ClassRoom> findByInstructorId(@Param("instructorId") Long instructorId);

    @Query("select c from ClassRoom c " +
            "left join fetch c.lectures " +
            "where c.id = :classId")
    Optional<ClassRoom> findFirstByClassById(@Param("classId") Long classId);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update ClassRoom c set c.isActive = 0 " +
            "where c.closeDate <= :todayDate ")
    void closeClassRoomByDate(@Param("todayDate") LocalDateTime todayDate);
}
