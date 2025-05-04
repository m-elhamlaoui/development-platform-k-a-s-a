package com.backend.demo.security.services;  
  
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.security.core.userdetails.UserDetails;  
import org.springframework.security.core.userdetails.UserDetailsService;  
import org.springframework.security.core.userdetails.UsernameNotFoundException;  
import org.springframework.stereotype.Service;  
import org.springframework.transaction.annotation.Transactional;  
  
import com.backend.demo.models.User;  
import com.backend.demo.repository.UserRepository;  
  
@Service  
public class UserDetailsServiceImpl implements UserDetailsService {  
    @Autowired  
    UserRepository userRepository;  
  
    @Override  
    @Transactional  
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {  
        User user = userRepository.findByEmail(email)  
            .orElseThrow(() -> new UsernameNotFoundException("Utilisateur non trouvé avec l'email: " + email));  
  
        return UserDetailsImpl.build(user);  
    }  
}