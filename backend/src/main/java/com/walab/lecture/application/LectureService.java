package com.walab.lecture.application;


import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.repository.ClassRoomRepository;
import com.walab.content.domain.Content;
import com.walab.lecture.application.dto.LectureContentDto;
import com.walab.lecture.application.dto.LectureCreateDto;
import com.walab.lecture.application.dto.LectureDto;
import com.walab.lecture.domain.Lecture;
import com.walab.lecture.domain.dto.LectureDataDto;
import com.walab.lecture.domain.repository.LectureRepository;

import lombok.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LectureService {
    private final LectureRepository lectureRepository;
    private final ClassRoomRepository classRoomRepository;

    @Transactional
    public LectureDto createLecture(LectureCreateDto lectureCreateDto, Long classId) {

        ClassRoom classRoom = classRoomRepository.findById(classId).orElseThrow();

        Lecture newLecture = new Lecture(classRoom, lectureCreateDto);
        Lecture savedLecture = lectureRepository.save(newLecture);

        return savedLecture.toDto();
    }

    public List<LectureContentDto> findByLectureNum(Long classId, int lectureNum) {
        Lecture lecture = lectureRepository.findFirstByLectureNum(classId, lectureNum);
        List<Content> contents = lecture.getContents();
        return contents
                .stream()
                .map(LectureContentDto::new)
                .collect(Collectors.toList());
    }

    public Long deleteLecture(Long lectureId) {
        lectureRepository.deleteById(lectureId);
        return lectureId;
    }

}
