package com.backend.demo.service;  
  
import com.backend.demo.dto.AuthenticationRequest;  
import com.backend.demo.dto.AuthenticationResponse;  
import com.backend.demo.dto.RegisterRequest;  
import com.backend.demo.model.Utilisateur;  
import com.backend.demo.repository.UtilisateurRepository;  
import com.backend.demo.security.JwtService;  
import org.springframework.security.authentication.AuthenticationManager;  
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;  
import org.springframework.security.crypto.password.PasswordEncoder;  
import org.springframework.stereotype.Service;  
  
@Service  
public class AuthService {  
  
    private final UtilisateurRepository utilisateurRepository;  
    private final PasswordEncoder passwordEncoder;  
    private final JwtService jwtService;  
    private final AuthenticationManager authenticationManager;  
  
    public AuthService(  
            UtilisateurRepository utilisateurRepository,  
            PasswordEncoder passwordEncoder,  
            JwtService jwtService,  
            AuthenticationManager authenticationManager  
    ) {  
        this.utilisateurRepository = utilisateurRepository;  
        this.passwordEncoder = passwordEncoder;  
        this.jwtService = jwtService;  
        this.authenticationManager = authenticationManager;  
    }  
  
    public AuthenticationResponse register(RegisterRequest request) {  
        if (utilisateurRepository.existsByEmail(request.getEmail())) {  
            throw new RuntimeException("Email déjà utilisé");  
        }  
          
        var user = new Utilisateur(  
                request.getNom(),  
                request.getEmail(),  
                passwordEncoder.encode(request.getMotDePasse())  
        );  
          
        utilisateurRepository.save(user);  
          
        var jwtToken = jwtService.generateToken(user);  
          
        return new AuthenticationResponse(jwtToken);  
    }  
  
    public AuthenticationResponse authenticate(AuthenticationRequest request) {  
        authenticationManager.authenticate(  
                new UsernamePasswordAuthenticationToken(  
                        request.getEmail(),  
                        request.getMotDePasse()  
                )  
        );  
          
        var user = utilisateurRepository.findByEmail(request.getEmail())  
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));  
          
        var jwtToken = jwtService.generateToken(user);  
          
        return new AuthenticationResponse(jwtToken);  
    }  
}