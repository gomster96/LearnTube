package com.walab.lecture.application.repository;

import com.walab.lecture.domain.Lecture;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureRepository extends JpaRepository<Lecture, Long> {
}
