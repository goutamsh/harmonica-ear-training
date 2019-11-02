package com.gshepur.harp.dao;

import com.gshepur.harp.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
}
