package com.backend.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ScoreQuiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomQuiz;
    private int score;

    @ManyToOne
    @JoinColumn(name = "utilisateur_id")
    private User utilisateur;

    public ScoreQuiz() {}

    public ScoreQuiz(String nomQuiz, int score, User utilisateur) {
        this.nomQuiz = nomQuiz;
        this.score = score;
        this.utilisateur = utilisateur;
    }

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

    public User getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(User utilisateur) {
        this.utilisateur = utilisateur;
    }
}
