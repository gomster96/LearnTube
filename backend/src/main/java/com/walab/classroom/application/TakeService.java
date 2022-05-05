package com.walab.classroom.application;

import java.util.List;
import java.util.stream.Collectors;

import com.walab.classroom.application.dto.ClassRoomEnrollDto;
import com.walab.classroom.application.dto.take.TakeUserDto;
import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.repository.ClassRoomRepository;
import com.walab.classroom.domain.repository.TakeRepository;
import com.walab.classroom.domain.take.Take;
import com.walab.user.domain.User;
import com.walab.user.domain.repository.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TakeService {
    private final ClassRoomRepository classRoomRepository;
    private final UserRepository userRepository;
    private final TakeRepository takeRepository;

    @Transactional
    public ClassRoomEnrollDto create(Long userId, Long classId) {

        User user = userRepository.findById(userId).orElseThrow();
        ClassRoom classRoom = classRoomRepository.findById(classId).orElseThrow();
        Take take = new Take(user, classRoom);
        Take saveTake = takeRepository.save(take);
        return new ClassRoomEnrollDto(saveTake.getId(), classRoom.getClassName());
    }

    @Transactional
    public List<TakeUserDto> getTakeWaitUsers(Long classId) {
        List<Take> takes = takeRepository.getWaitTakeByClassId(classId);
        return takes.stream()
                    .map(Take::toTakeUserDto)
                    .collect(Collectors.toList());
    }

    @Transactional
    public TakeUserDto updateAccept(Long takeId){
        Take take = takeRepository.findById(takeId).orElseThrow();
        take.acceptTake();
        return take.toTakeUserDto();
    }
}

