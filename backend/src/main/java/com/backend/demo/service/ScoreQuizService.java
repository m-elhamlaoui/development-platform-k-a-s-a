package com.backend.demo.service;    
    
import org.springframework.beans.factory.annotation.Autowired;    
import org.springframework.stereotype.Service;    
    
import com.backend.demo.model.ScoreQuiz;    
import com.backend.demo.model.Utilisateur;    
import com.backend.demo.repository.ScoreQuizRepository;    
import com.backend.demo.repository.UtilisateurRepository;  
  
import jakarta.transaction.Transactional;  
import java.util.Optional;    
import jakarta.persistence.EntityManager;  
import jakarta.persistence.PersistenceContext;  
  
@Service    
public class ScoreQuizService {    
    
    @Autowired    
    private ScoreQuizRepository scoreQuizRepository;    
    
    @Autowired    
    private UtilisateurRepository utilisateurRepository;  
      
    @PersistenceContext  
    private EntityManager entityManager;  
    
    @Transactional  
    public ScoreQuiz saveOrUpdateScore(String email, String nomQuiz, int newScore) {    
        System.out.println("===== DÉBUT saveOrUpdateScore =====");  
        System.out.println("Email: " + email);  
        System.out.println("NomQuiz: " + nomQuiz);  
        System.out.println("Score: " + newScore);  
          
        Utilisateur utilisateur = utilisateurRepository.findByEmail(email)    
            .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));    
        System.out.println("Utilisateur trouvé avec ID: " + utilisateur.getId());    
    
        System.out.println("Recherche d'un score existant...");  
        // Flush et clear pour s'assurer que Hibernate voit les modifications précédentes  
        entityManager.flush();  
        entityManager.clear();  
          
        // Normaliser le nom du quiz pour éviter les problèmes de casse ou d'espaces  
        String normalizedNomQuiz = nomQuiz.trim().toLowerCase();  
        System.out.println("Nom du quiz normalisé: " + normalizedNomQuiz);  
          
        // Rechercher un score existant  
        Optional<ScoreQuiz> existingScore = scoreQuizRepository    
            .findByUtilisateurAndNomQuiz(utilisateur, nomQuiz);  
          
        System.out.println("Résultat de la recherche: " + (existingScore.isPresent() ? "Score trouvé" : "Aucun score trouvé"));  
    
        if (existingScore.isPresent()) {    
            ScoreQuiz scoreQuiz = existingScore.get();  
            System.out.println("Score existant ID: " + scoreQuiz.getId() + ", valeur: " + scoreQuiz.getScore());  
            System.out.println("Mise à jour du score à: " + newScore);  
            scoreQuiz.setScore(newScore);  // mise à jour    
            ScoreQuiz savedScore = scoreQuizRepository.save(scoreQuiz);  
            System.out.println("Score mis à jour avec succès, ID: " + savedScore.getId());  
            return savedScore;  
        } else {    
            System.out.println("Création d'un nouveau score");  
            ScoreQuiz newScoreQuiz = new ScoreQuiz();    
            newScoreQuiz.setUtilisateur(utilisateur);    
            newScoreQuiz.setNomQuiz(nomQuiz);    
            newScoreQuiz.setScore(newScore);    
            ScoreQuiz savedScore = scoreQuizRepository.save(newScoreQuiz);  
            System.out.println("Nouveau score créé avec succès, ID: " + savedScore.getId());  
            return savedScore;  
        }    
    }    
}