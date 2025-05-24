package com.backend.demo.controller;      
      
import java.util.HashMap;      
import java.util.List;      
import java.util.Map;      
import java.util.stream.Collectors;      
      
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
import com.backend.demo.service.ScoreQuizService;    
      
@RestController      
@RequestMapping("/api/scores")      
public class ScoreQuizController {      
      
    @Autowired      
    private ScoreQuizRepository scoreQuizRepository;      
      
    @Autowired      
    private UtilisateurRepository utilisateurRepository;      
        
    @Autowired    
    private ScoreQuizService scoreQuizService;    
      
    // Enregistrer un nouveau score ou mettre à jour un score existant    
    @PostMapping      
    public ResponseEntity<?> saveScore(@RequestBody ScoreQuiz scoreRequest, Authentication auth) {      
        try {      
            System.out.println("=== POST /api/scores/ endpoint called ===");  
              
            // Debug authentication info  
            System.out.println("Authentication object: " + (auth != null ? "Present" : "Missing"));  
            if (auth != null) {  
                System.out.println("Authentication name: " + auth.getName());  
                System.out.println("Authentication principal: " + auth.getPrincipal());  
                System.out.println("Authentication authorities: " + auth.getAuthorities());  
            }  
              
            // Debug request body  
            System.out.println("Request body - nomQuiz: " + scoreRequest.getNomQuiz());  
            System.out.println("Request body - score: " + scoreRequest.getScore());  
              
            String email = auth.getName(); // Obtenir l'email de l'utilisateur authentifié      
            System.out.println("Email de l'utilisateur: " + email);      
                
            // Utiliser le service pour sauvegarder ou mettre à jour le score    
            System.out.println("Appel du service pour vérifier/mettre à jour le score");    
            ScoreQuiz savedScore = scoreQuizService.saveOrUpdateScore(    
                email,    
                scoreRequest.getNomQuiz(),    
                scoreRequest.getScore()    
            );    
                
            System.out.println("Score sauvegardé avec succès: " + savedScore.getId());      
                  
            // Retourner un DTO simplifié au lieu de l'entité complète      
            Map<String, Object> responseDto = new HashMap<>();      
            responseDto.put("id", savedScore.getId());      
            responseDto.put("nomQuiz", savedScore.getNomQuiz());      
            responseDto.put("score", savedScore.getScore());      
            responseDto.put("utilisateurId", savedScore.getUtilisateur().getId());      
              
            System.out.println("Returning response: " + responseDto);  
            return ResponseEntity.ok(responseDto);      
        } catch (Exception e) {      
            System.err.println("Erreur lors de la sauvegarde du score: " + e.getMessage());      
            e.printStackTrace();      
            return ResponseEntity.status(500).body("Erreur: " + e.getMessage());      
        }      
    }      
      
    @GetMapping("/user")        
    public ResponseEntity<List<Map<String, Object>>> getUserScores(Authentication auth) {        
        System.out.println("=== GET /api/scores/user endpoint called ===");  
          
        // Debug authentication info  
        System.out.println("Authentication object: " + (auth != null ? "Present" : "Missing"));  
        if (auth != null) {  
            System.out.println("Authentication name: " + auth.getName());  
            System.out.println("Authentication principal: " + auth.getPrincipal());  
            System.out.println("Authentication authorities: " + auth.getAuthorities());  
        }  
          
        String email = auth.getName();        
        System.out.println("Email de l'utilisateur: " + email);  
          
        Utilisateur utilisateur = utilisateurRepository.findByEmail(email)        
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));        
        System.out.println("Utilisateur trouvé avec ID: " + utilisateur.getId());  
            
        List<ScoreQuiz> scores = scoreQuizRepository.findByUtilisateur(utilisateur);        
        System.out.println("Nombre de scores trouvés: " + scores.size());  
                
        // Convertir en DTO simplifié        
        List<Map<String, Object>> scoreDTOs = scores.stream()        
            .map(score -> {        
                Map<String, Object> dto = new HashMap<>();        
                dto.put("id", score.getId());        
                dto.put("nomQuiz", score.getNomQuiz());        
                dto.put("score", score.getScore());        
                return dto;        
            })        
            .collect(Collectors.toList());        
          
        System.out.println("Returning " + scoreDTOs.size() + " scores");  
        return ResponseEntity.ok(scoreDTOs);        
    }      
}