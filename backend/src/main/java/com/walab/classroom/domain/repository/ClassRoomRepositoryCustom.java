package com.walab.classroom.domain.repository;

import com.walab.classroom.domain.ClassRoom;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ClassRoomRepositoryCustom {
    Page<ClassRoom> searchClassRoomByCondition(int condition, Pageable pageable);
}
