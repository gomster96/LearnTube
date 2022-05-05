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
        // ToDo 이미 수강중인 수업인지 아닌지 확인 필요함
        // ToDo Reject된 상태라면 어떻게 해야할까? 다시 만들 수 있도록 해야하나?
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
        Take take = takeRepository.findById(takeId).orElseThrow();
        take.acceptTake();
        return take.toTakeUserDto();
    }

    @Transactional
    public List<TakeUserDto> updateAllAccept(Long classId) {
        List<Take> takes = takeRepository.getWaitTakeByClassId(classId);
        // ToDo N+1 발생 -> 성능 안좋음 -> 나중에 바꾸기
        takes.forEach(Take::acceptTake);
        return takes.stream()
                    .map(Take::toTakeUserDto)
                    .collect(Collectors.toList());
    }

    @Transactional
    public TakeUserDto updateReject(Long takeId) {
        Take take = takeRepository.findById(takeId).orElseThrow();
        take.rejectTake();
        return take.toTakeUserDto();
    }

    @Transactional
    public List<TakeUserDto> updateAllReject(Long classId) {
        List<Take> takes = takeRepository.getWaitTakeByClassId(classId);
        // ToDo N+1 발생 -> 성능 안좋음 -> 나중에 바꾸기
        takes.forEach(Take::rejectTake);
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
}

