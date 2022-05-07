package com.walab.classroom.application;

import java.util.List;
import java.util.stream.Collectors;

import com.walab.classroom.application.dto.ClassRoomCUDto;
import com.walab.classroom.application.dto.ClassRoomDto;
import com.walab.classroom.application.dto.take.TakeClassRoomDto;
import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.repository.ClassRoomRepository;
import com.walab.user.domain.User;
import com.walab.user.domain.repository.UserRepository;

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
        User instructor = userRepository.findById(instructorId).orElseThrow();
        ClassRoom newClassRoom = new ClassRoom(instructor, classRoomCUDto);
        ClassRoom savedClassRoom = classRoomRepository.save(newClassRoom);
        return savedClassRoom.toCreatResponseDto();
    }

    @Transactional
    public ClassRoomDto update(Long classId, ClassRoomCUDto classRoomCUDto) {
        ClassRoom classRoom = classRoomRepository.findById(classId).orElseThrow();
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
        //ToDo ClassRoom Data 받아오는 query 성능 향상시키기
        // N+1 문제가 발생하지않도록
        ClassRoom classroom = classRoomRepository.findById(classId).orElseThrow();

        return classroom.toDto();
    }

    @Transactional
    public List<TakeClassRoomDto> getManagedClasses(Long userId){
        List<ClassRoom> classRooms = classRoomRepository.findClassRoomByInstructorId(userId);
        return classRooms.stream().map(TakeClassRoomDto::new).collect(Collectors.toList());
    }

}
