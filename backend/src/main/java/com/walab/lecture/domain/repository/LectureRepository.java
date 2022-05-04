package com.walab.lecture.domain.repository;

import com.walab.lecture.domain.Lecture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
    @Query("select l from Lecture l where l.classRoom.id = :classId and l.lectureNum = :lectureNum")
    Lecture findFirstByLectureNum(@RequestParam("classId") Long classId, @RequestParam("lectureNum") int lectureNum);
//
//    @Query("select l.lectureNum as lectureNum, c.id as id, c.contentName as contentName, c.closeDate as closeDate from Lecture l, Content c where l.lectureNum = :lectureNum")
//    List<LectureContentDto> findByLectureNum(@PathVariable("lectureNum") int lectureNum);
}