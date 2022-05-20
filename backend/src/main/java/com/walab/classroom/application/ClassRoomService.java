package com.walab.classroom.application;

import java.util.List;
import java.util.stream.Collectors;

import com.walab.classroom.application.dto.ClassRoomCUDto;
import com.walab.classroom.application.dto.ClassRoomCourseDto;
import com.walab.classroom.application.dto.ClassRoomDto;
import com.walab.classroom.application.dto.take.TakeClassRoomDto;
import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.repository.ClassRoomRepository;
import com.walab.exception.classroom.ClassRoomNotFoundException;
import com.walab.exception.user.UserNotFoundException;
import com.walab.user.domain.User;
import com.walab.user.domain.repository.UserRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClassRoomService {
    private final ClassRoomRepository classRoomRepository;
    private final UserRepository userRepository;

    @Transactional
    public ClassRoomDto create(Long instructorId, ClassRoomCUDto classRoomCUDto) {
        User instructor = userRepository.findById(instructorId).orElseThrow(UserNotFoundException::new);
        ClassRoom newClassRoom = new ClassRoom(instructor, classRoomCUDto);
        ClassRoom savedClassRoom = classRoomRepository.save(newClassRoom);
        return savedClassRoom.toCreatResponseDto();
    }

    @Transactional
    public ClassRoomDto update(Long classId, ClassRoomCUDto classRoomCUDto) {
        ClassRoom classRoom = classRoomRepository.findById(classId).orElseThrow(ClassRoomNotFoundException::new);
        classRoom.update(classRoomCUDto);
        return classRoom.toUpdateResponseDto();
    }

    @Transactional
    public Long delete(Long classId) {
        classRoomRepository.deleteById(classId);
        return classId;
    }

    @Transactional
    public ClassRoomDto find(Long userId, Long classId) {

        ClassRoom classroom = classRoomRepository.findById(classId).orElseThrow(ClassRoomNotFoundException::new);

        return classroom.toDto();
    }

    @Transactional
    public List<TakeClassRoomDto> getManagedClasses(Long userId){
        List<ClassRoom> classRooms = classRoomRepository.findByInstructorId(userId);
        return classRooms.stream().map(TakeClassRoomDto::new).collect(Collectors.toList());
    }

    @Transactional
    public List<ClassRoomCourseDto> findClassRoomsByPage(int condition, String keyword, Pageable pageable){

        Page<ClassRoom> classRooms = classRoomRepository.searchClassRoomByCondition(condition, keyword, pageable);
        int totalPage = classRooms.getTotalPages();
        return classRooms.get()
                         .map(classRoom -> new ClassRoomCourseDto(classRoom, totalPage))
                         .collect(Collectors.toList());

    }

}
