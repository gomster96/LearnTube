package com.walab.classroom.domain.repository;

import com.walab.classroom.domain.ClassRoom;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

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

    @Query("select c from ClassRoom  c " +
            "left join fetch c.takes " +
            "join fetch c.instructor " +
            "where c.isActive = true " +
            "order by c.createdAt desc ")
    List<ClassRoom> findByPage(Pageable pageable);

    @Query("select c " +
            "from ClassRoom  c, Lecture  l " +
            "left join fetch c.lectures " +
            "where l.classRoom.id = c.id ")
    Optional<ClassRoom> findFirstByLectureId(@Param("lectureId") Long lectureId);
}
