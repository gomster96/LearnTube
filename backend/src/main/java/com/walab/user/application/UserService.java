package com.walab.user.application;

import java.util.Optional;

import com.walab.exception.user.UserNotFoundException;
import com.walab.user.application.dto.UserDto;
import com.walab.user.domain.User;
import com.walab.user.domain.repository.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserDto userLogin(UserDto userDto){
        Optional<User> findedUser = userRepository.findByEmail(userDto.getEmail());
        if(findedUser.isPresent()){
            return findedUser.get().toDto();
        }
        User savedUser = userRepository.save(new User(userDto.getName(), userDto.getEmail()));
        return savedUser.toDto();
    }

    @Transactional
    public UserDto findById(Long userId){
        User user = userRepository.findById(userId).orElseThrow(UserNotFoundException::new);
        return user.toDto();
    }

    @Transactional
    public void deleteUser(Long userId){
        userRepository.deleteById(userId);
    }
}
