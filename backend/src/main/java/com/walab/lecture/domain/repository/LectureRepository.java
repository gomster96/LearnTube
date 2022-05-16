package com.walab.lecture.domain.repository;

import com.walab.lecture.domain.Lecture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestParam;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
    @Query("select l from Lecture l where l.classRoom.id = :classId and l.lectureNum = :lectureNum")
    Lecture findFirstByLectureNum(@RequestParam("classId") Long classId, @RequestParam("lectureNum") int lectureNum);

    @Modifying(clearAutomatically = true)
    @Query("update Lecture l set l.lectureNum = l.lectureNum-1 " +
            "where l.classRoom.id = :classId " +
            "and l.lectureNum > :deletedLecNum ")
    void updateLectureNumByDelete(@Param("classId") Long classId, @Param("deletedLecNum") int deletedLecNum);

}