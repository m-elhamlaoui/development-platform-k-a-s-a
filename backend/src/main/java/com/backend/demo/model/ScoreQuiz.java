package com.backend.demo.model;  
  
import com.fasterxml.jackson.annotation.JsonIgnore;  
import jakarta.persistence.Entity;  
import jakarta.persistence.GeneratedValue;  
import jakarta.persistence.GenerationType;  
import jakarta.persistence.Id;  
import jakarta.persistence.JoinColumn;  
import jakarta.persistence.ManyToOne;  
import jakarta.persistence.Table;  
import jakarta.persistence.UniqueConstraint;  
  
@Entity  
@Table(  
    name = "score_quiz",  
    uniqueConstraints = @UniqueConstraint(columnNames = {"utilisateur_id", "nom_quiz"})  
)  
public class ScoreQuiz {  
  
    @Id  
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Long id;  
  
    private String nomQuiz;  
    private int score;  
  
    @ManyToOne  
    @JoinColumn(name = "utilisateur_id")  
    @JsonIgnore // Add this annotation to prevent recursion  
    private Utilisateur utilisateur;  
  
    public ScoreQuiz() {}  
  
    public ScoreQuiz(String nomQuiz, int score, Utilisateur utilisateur) {  
        this.nomQuiz = nomQuiz;  
        this.score = score;  
        this.utilisateur = utilisateur;  
    }  
  
    // Getters and setters  
    public Long getId() {  
        return id;  
    }  
  
    public String getNomQuiz() {  
        return nomQuiz;  
    }  
  
    public void setNomQuiz(String nomQuiz) {  
        this.nomQuiz = nomQuiz;  
    }  
  
    public int getScore() {  
        return score;  
    }  
  
    public void setScore(int score) {  
        this.score = score;  
    }  
  
    public Utilisateur getUtilisateur() {  
        return utilisateur;  
    }  
  
    public void setUtilisateur(Utilisateur utilisateur) {  
        this.utilisateur = utilisateur;  
    }  
}