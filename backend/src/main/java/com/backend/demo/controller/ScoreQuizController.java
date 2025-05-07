package com.backend.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.demo.model.ScoreQuiz;
import com.backend.demo.model.Utilisateur;
import com.backend.demo.repository.ScoreQuizRepository;
import com.backend.demo.repository.UtilisateurRepository;

@RestController
@RequestMapping("/api/scores")
public class ScoreQuizController {

    @Autowired
    private ScoreQuizRepository scoreQuizRepository;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    // Enregistrer un nouveau score  
    @PostMapping
    public ResponseEntity<?> saveScore(@RequestBody ScoreQuiz scoreRequest, Authentication auth) {
        String email = auth.getName(); // Obtenir l'email de l'utilisateur authentifié  
        Utilisateur utilisateur = utilisateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        ScoreQuiz score = new ScoreQuiz(
                scoreRequest.getNomQuiz(),
                scoreRequest.getScore(),
                utilisateur
        );

        ScoreQuiz savedScore = scoreQuizRepository.save(score);
        return ResponseEntity.ok(savedScore);
    }

    // Obtenir tous les scores d'un utilisateur  
    @GetMapping("/user")
    public ResponseEntity<List<ScoreQuiz>> getUserScores(Authentication auth) {
        String email = auth.getName();
        Utilisateur utilisateur = utilisateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        List<ScoreQuiz> scores = scoreQuizRepository.findByUtilisateur(utilisateur);
        return ResponseEntity.ok(scores);
    }
}
