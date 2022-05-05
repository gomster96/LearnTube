package com.walab.classroom.domain.repository;

import com.walab.classroom.domain.take.Take;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TakeRepository extends JpaRepository<Take, Long> {
}
