package com.walab.classroom.application;

import java.util.List;
import java.util.stream.Collectors;

import com.walab.classroom.application.dto.ClassRoomEnrollDto;
import com.walab.classroom.application.dto.take.TakeClassRoomDto;
import com.walab.classroom.application.dto.take.TakeUserDto;
import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.repository.ClassRoomRepository;
import com.walab.classroom.domain.repository.TakeRepository;
import com.walab.classroom.domain.take.Take;
import com.walab.exception.classroom.ClassRoomNotFoundException;
import com.walab.exception.classroom.TakeNotFoundException;
import com.walab.exception.user.UserNotFoundException;
import com.walab.user.application.dto.UserDto;
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
        User user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        ClassRoom classRoom = classRoomRepository.findById(classId).orElseThrow(ClassRoomNotFoundException::new);
        Take take = new Take(user, classRoom);
        Take saveTake = takeRepository.save(take);
        return new ClassRoomEnrollDto(saveTake.getId(), classRoom.getClassName());
    }

    @Transactional
    public List<TakeUserDto> getTakeWaitUsers(Long classId) {
        List<Take> takes = takeRepository.getWaitTakeByClassId(classId);
        return takes.stream()
                    .map(TakeUserDto::new)
                    .collect(Collectors.toList());
    }

    @Transactional
    public TakeUserDto updateAccept(Long takeId) {
        Take take = takeRepository.findById(takeId).orElseThrow(TakeNotFoundException::new);
        take.acceptTake();
        return take.toTakeUserDto();
    }

    @Transactional
    public List<TakeUserDto> updateAllAccept(Long classId) {
        List<Take> takes = takeRepository.getWaitTakeByClassId(classId);
        takeRepository.changeStatusByClassID(classId);

        return takes.stream()
                    .map(Take::toTakeUserDto)
                    .collect(Collectors.toList());
    }

    @Transactional
    public TakeUserDto updateReject(Long takeId) {
        Take take = takeRepository.findById(takeId).orElseThrow(TakeNotFoundException::new);
        takeRepository.deleteById(takeId);
        return take.toTakeUserDto();
    }

    @Transactional
    public List<TakeUserDto> updateAllReject(Long classId) {
        List<Take> takes = takeRepository.getWaitTakeByClassId(classId);
        takeRepository.deleteWaitTakeByClassId(classId);

        return takes.stream()
                    .map(TakeUserDto::new)
                    .collect(Collectors.toList());
    }

    @Transactional
    public List<TakeClassRoomDto> getTakingClasses(Long userId) {
        List<Take> takes = takeRepository.findDashboardTakeByUserId(userId, true);
        return takes.stream().map(TakeClassRoomDto::new).collect(Collectors.toList());
    }

    @Transactional
    public List<TakeClassRoomDto> getClosedClasses(Long userId) {
        List<Take> takes = takeRepository.findDashboardTakeByUserId(userId, false);
        return takes.stream().map(TakeClassRoomDto::new).collect(Collectors.toList());
    }

    @Transactional
    public List<UserDto> findStudents(Long classId) {
        List<Take> takes = takeRepository.findTakeUsersByClassId(classId);
        return takes.stream()
                    .map(take -> take.getUser().toDto())
                    .collect(Collectors.toList());
    }
}

