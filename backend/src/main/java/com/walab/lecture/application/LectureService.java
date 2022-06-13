package com.walab.lecture.application;


import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.repository.ClassRoomRepository;
import com.walab.content.domain.Content;
import com.walab.exception.classroom.ClassRoomNotFoundException;
import com.walab.exception.lecture.LectureNotFoundException;
import com.walab.lecture.application.dto.LectureContentDto;
import com.walab.lecture.application.dto.LectureCreateDto;
import com.walab.lecture.application.dto.LectureDataDto;
import com.walab.lecture.domain.Lecture;

import com.walab.lecture.domain.repository.LectureRepository;

import lombok.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LectureService {
    private final LectureRepository lectureRepository;
    private final ClassRoomRepository classRoomRepository;

    @Transactional
    public LectureDataDto createLecture(LectureCreateDto lectureCreateDto, Long classId) {


        ClassRoom classRoom = classRoomRepository.findFirstByClassById(classId).orElseThrow(LectureNotFoundException::new);
        lectureCreateDto.setLectureNum(classRoom.getLectures().size() + 1);
        Lecture newLecture = new Lecture(classRoom, lectureCreateDto);
        Lecture savedLecture = lectureRepository.save(newLecture);

        return savedLecture.toLectureDataDto();
    }

    public List<LectureContentDto> findByLectureNum(Long classId, int lectureNum) {
        Lecture lecture = lectureRepository.findFirstByLectureNum(classId, lectureNum);
        List<Content> contents = lecture.getContents();
        return contents
                .stream()
                .map(LectureContentDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Long deleteLecture(Long lectureId) {
        Lecture deleteLecture = lectureRepository.findById(lectureId).orElseThrow(LectureNotFoundException::new);
        lectureRepository.updateLectureNumByDelete(deleteLecture.getClassRoom().getId(), deleteLecture.getLectureNum());
        lectureRepository.deleteById(lectureId);
        return lectureId;
    }

}
