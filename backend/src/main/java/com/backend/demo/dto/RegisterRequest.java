package com.backend.demo.dto;  
  
public class RegisterRequest {  
    private String nom;  
    private String email;  
    private String motDePasse;  
  
    public RegisterRequest() {}  
  
    public RegisterRequest(String nom, String email, String motDePasse) {  
        this.nom = nom;  
        this.email = email;  
        this.motDePasse = motDePasse;  
    }  
  
    public String getNom() {  
        return nom;  
    }  
  
    public void setNom(String nom) {  
        this.nom = nom;  
    }  
  
    public String getEmail() {  
        return email;  
    }  
  
    public void setEmail(String email) {  
        this.email = email;  
    }  
  
    public String getMotDePasse() {  
        return motDePasse;  
    }  
  
    public void setMotDePasse(String motDePasse) {  
        this.motDePasse = motDePasse;  
    }  
}