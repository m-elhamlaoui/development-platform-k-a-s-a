package com.backend.demo.service;  
  
import com.backend.demo.repository.UtilisateurRepository;  
import org.springframework.security.core.userdetails.UserDetails;  
import org.springframework.security.core.userdetails.UserDetailsService;  
import org.springframework.security.core.userdetails.UsernameNotFoundException;  
import org.springframework.stereotype.Service;  
  
@Service  
public class UserDetailsServiceImpl implements UserDetailsService {  
  
    private final UtilisateurRepository utilisateurRepository;  
  
    public UserDetailsServiceImpl(UtilisateurRepository utilisateurRepository) {  
        this.utilisateurRepository = utilisateurRepository;  
    }  
  
    @Override  
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {  
        return utilisateurRepository.findByEmail(email)  
                .orElseThrow(() -> new UsernameNotFoundException("Utilisateur non trouvé avec l'email: " + email));  
    }  
}