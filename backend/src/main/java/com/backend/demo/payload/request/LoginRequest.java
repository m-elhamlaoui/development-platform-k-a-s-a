package com.backend.demo.payload.request;  
  
import jakarta.validation.constraints.NotBlank;  
  
public class LoginRequest {  
    @NotBlank  
    private String email;  
  
    @NotBlank  
    private String motDePasse;  
  
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