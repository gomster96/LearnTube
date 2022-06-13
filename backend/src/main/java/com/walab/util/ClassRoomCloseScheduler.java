package com.walab.util;

import java.time.LocalDateTime;

import com.walab.classroom.domain.repository.ClassRoomRepository;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ClassRoomCloseScheduler {

    private final ClassRoomRepository classRoomRepository;

    @Scheduled(cron = "0 0 0 * * *")
    public void closeClassByDate() {
        classRoomRepository.closeClassRoomByDate(LocalDateTime.now());
    }
}
