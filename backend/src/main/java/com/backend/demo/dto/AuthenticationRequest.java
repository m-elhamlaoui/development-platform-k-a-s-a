package com.backend.demo.dto;  
  
public class AuthenticationRequest {  
    private String email;  
    private String motDePasse;  
  
    public AuthenticationRequest() {}  
  
    public AuthenticationRequest(String email, String motDePasse) {  
        this.email = email;  
        this.motDePasse = motDePasse;  
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