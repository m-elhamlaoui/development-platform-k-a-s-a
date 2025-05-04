package com.backend.demo.payload.response;  
  
public class JwtResponse {  
    private String token;  
    private String type = "Bearer";  
    private Long id;  
    private String nom;  
    private String email;  
  
    public JwtResponse(String accessToken, Long id, String nom, String email) {  
        this.token = accessToken;  
        this.id = id;  
        this.nom = nom;  
        this.email = email;  
    }  
  
    public String getAccessToken() {  
        return token;  
    }  
  
    public void setAccessToken(String accessToken) {  
        this.token = accessToken;  
    }  
  
    public String getTokenType() {  
        return type;  
    }  
  
    public void setTokenType(String tokenType) {  
        this.type = tokenType;  
    }  
  
    public Long getId() {  
        return id;  
    }  
  
    public void setId(Long id) {  
        this.id = id;  
    }  
  
    public String getEmail() {  
        return email;  
    }  
  
    public void setEmail(String email) {  
        this.email = email;  
    }  
  
    public String getNom() {  
        return nom;  
    }  
  
    public void setNom(String nom) {  
        this.nom = nom;  
    }  
}