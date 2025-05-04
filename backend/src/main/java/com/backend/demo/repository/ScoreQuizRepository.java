package com.backend.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.demo.models.ScoreQuiz;

public interface ScoreQuizRepository extends JpaRepository<ScoreQuiz, Long> {

}
