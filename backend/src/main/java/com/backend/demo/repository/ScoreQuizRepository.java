package com.backend.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.demo.model.ScoreQuiz;
import com.backend.demo.model.Utilisateur;

public interface ScoreQuizRepository extends JpaRepository<ScoreQuiz, Long> {

    List<ScoreQuiz> findByUtilisateur(Utilisateur utilisateur);

    Optional<ScoreQuiz> findByUtilisateurAndNomQuiz(Utilisateur utilisateur, String nomQuiz);
}
