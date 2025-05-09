package com.backend.demo.model;  
  
import java.util.Collection;  
import java.util.Collections;  
import java.util.List;  
  
import jakarta.persistence.CascadeType;  
import jakarta.persistence.Entity;  
import jakarta.persistence.GeneratedValue;  
import jakarta.persistence.GenerationType;  
import jakarta.persistence.Id;  
import jakarta.persistence.OneToMany;  
import org.springframework.security.core.GrantedAuthority;  
import org.springframework.security.core.authority.SimpleGrantedAuthority;  
import org.springframework.security.core.userdetails.UserDetails;  
  
@Entity  
public class Utilisateur implements UserDetails {  
  
    @Id  
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Long id;  
  
    private String nom;  
    private String email;  
    private String motDePasse;  
  
    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)  
    private List<ScoreQuiz> scores;  
  
    public Utilisateur() {}  
  
    public Utilisateur(String nom, String email, String motDePasse) {  
        this.nom = nom;  
        this.email = email;  
        this.motDePasse = motDePasse;  
    }  
  
    public Long getId() {  
        return id;  
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
  
    public List<ScoreQuiz> getScores() {  
        return scores;  
    }  
  
    public void setScores(List<ScoreQuiz> scores) {  
        this.scores = scores;  
    }  
  
    @Override  
    public Collection<? extends GrantedAuthority> getAuthorities() {  
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));  
    }  
  
    @Override  
    public String getPassword() {  
        return motDePasse;  
    }  
  
    @Override  
    public String getUsername() {  
        return email;  
    }  
  
    @Override  
    public boolean isAccountNonExpired() {  
        return true;  
    }  
  
    @Override  
    public boolean isAccountNonLocked() {  
        return true;  
    }  
  
    @Override  
    public boolean isCredentialsNonExpired() {  
        return true;  
    }  
  
    @Override  
    public boolean isEnabled() {  
        return true;  
    }  
}