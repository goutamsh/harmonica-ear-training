package com.gshepur.harp.login;

import com.gshepur.harp.dao.UserRepository;
import com.gshepur.harp.dto.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        com.gshepur.harp.domain.User user = userRepository.findByUsername(username);
        if(user != null){
            return new User(user.getFirstName(), user.getHashedPassword(),
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

    public void registerNewUser(UserRegisterRequest userRegisterRequest) {
        if(userRepository.findByUsername(userRegisterRequest.getUsername()) == null){
            userRepository.save(new com.gshepur.harp.domain.User(userRegisterRequest.getFirstName(), userRegisterRequest.getLastName(),
                    userRegisterRequest.getUsername(), passwordEncoder.encode(userRegisterRequest.getPassword())));
        }else{
            throw new RuntimeException("User with same username already exists");
        }
    }
}
