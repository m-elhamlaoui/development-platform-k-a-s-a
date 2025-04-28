package com.backend.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.demo.model.Utilisateur;

public interface UserRepository extends JpaRepository<Utilisateur, Long> {

}
