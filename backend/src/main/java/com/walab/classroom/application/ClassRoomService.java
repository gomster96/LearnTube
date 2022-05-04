package com.walab.classroom.application;

import java.util.Optional;

import com.walab.classroom.application.dto.ClassRoomCUDto;
import com.walab.classroom.application.dto.ClassRoomDto;
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
    public ClassRoomDto create(Long instructorId, ClassRoomCUDto classRoomCUDto){
        User instructor = userRepository.findById(instructorId).orElseThrow();
        ClassRoom newClassRoom = new ClassRoom(instructor, classRoomCUDto);
        ClassRoom savedClassRoom = classRoomRepository.save(newClassRoom);
        return savedClassRoom.toCreatResponseDto();
    }
}
