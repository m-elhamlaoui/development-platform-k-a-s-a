package com.backend.demo.security.services;  
  
import java.util.Collection;  
import java.util.Collections;  
import java.util.Objects;  
  
import org.springframework.security.core.GrantedAuthority;  
import org.springframework.security.core.authority.SimpleGrantedAuthority;  
import org.springframework.security.core.userdetails.UserDetails;  
  
import com.backend.demo.models.User;  
import com.fasterxml.jackson.annotation.JsonIgnore;  
  
public class UserDetailsImpl implements UserDetails {  
    private static final long serialVersionUID = 1L;  
  
    private Long id;  
    private String nom;  
    private String email;  
      
    @JsonIgnore  
    private String motDePasse;  
      
    private Collection<? extends GrantedAuthority> authorities;  
  
    public UserDetailsImpl(Long id, String nom, String email, String motDePasse) {  
        this.id = id;  
        this.nom = nom;  
        this.email = email;  
        this.motDePasse = motDePasse;  
        // Comme vous n'avez pas de rôles, nous créons une autorité par défaut  
        this.authorities = Collections.singletonList(new SimpleGrantedAuthority("USER"));  
    }  
  
    public static UserDetailsImpl build(User user) {  
        return new UserDetailsImpl(  
            user.getId(),  
            user.getNom(),  
            user.getEmail(),  
            user.getMotDePasse()  
        );  
    }  
  
    @Override  
    public Collection<? extends GrantedAuthority> getAuthorities() {  
        return authorities;  
    }  
  
    public Long getId() {  
        return id;  
    }  
  
    public String getEmail() {  
        return email;  
    }  
      
    public String getNom() {  
        return nom;  
    }  
  
    @Override  
    public String getPassword() {  
        return motDePasse;  
    }  
  
    @Override  
    public String getUsername() {  
        // Utiliser l'email comme identifiant unique  
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
  
    @Override  
    public boolean equals(Object o) {  
        if (this == o)  
            return true;  
        if (o == null || getClass() != o.getClass())  
            return false;  
        UserDetailsImpl user = (UserDetailsImpl) o;  
        return Objects.equals(id, user.id);  
    }  
}