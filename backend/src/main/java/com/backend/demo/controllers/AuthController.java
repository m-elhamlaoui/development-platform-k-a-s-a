package com.backend.demo.controllers;  
  
import jakarta.validation.Valid;  
  
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.http.ResponseEntity;  
import org.springframework.security.authentication.AuthenticationManager;  
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;  
import org.springframework.security.core.Authentication;  
import org.springframework.security.core.context.SecurityContextHolder;  
import org.springframework.security.crypto.password.PasswordEncoder;  
import org.springframework.web.bind.annotation.CrossOrigin;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
import com.backend.demo.models.User;  
import com.backend.demo.payload.request.LoginRequest;  
import com.backend.demo.payload.request.SignupRequest;  
import com.backend.demo.payload.response.JwtResponse;  
import com.backend.demo.payload.response.MessageResponse;  
import com.backend.demo.repository.UserRepository;  
import com.backend.demo.security.jwt.JwtUtils;  
import com.backend.demo.security.services.UserDetailsImpl;  
  
@CrossOrigin(origins = "*", maxAge = 3600)  
@RestController  
@RequestMapping("/api/auth")  
public class AuthController {  
    @Autowired  
    AuthenticationManager authenticationManager;  
  
    @Autowired  
    UserRepository userRepository;  
  
    @Autowired  
    PasswordEncoder encoder;  
  
    @Autowired  
    JwtUtils jwtUtils;

    @PostMapping("/signin")  
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {  
        Authentication authentication = authenticationManager  
            .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getMotDePasse()));  
    
        SecurityContextHolder.getContext().setAuthentication(authentication);  
        String jwt = jwtUtils.generateJwtToken(authentication);  
        
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();  
    
        return ResponseEntity.ok(new JwtResponse(jwt,   
                                userDetails.getId(),   
                                userDetails.getNom(),   
                                userDetails.getEmail()));  
    }  
    
    @PostMapping("/signup")  
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {  
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {  
            return ResponseEntity  
                .badRequest()  
                .body(new MessageResponse("Erreur: Cet email est déjà utilisé!"));  
        }  
    
        // Création du nouveau compte utilisateur  
        User user = new User(signUpRequest.getNom(),   
                            signUpRequest.getEmail(),  
                            encoder.encode(signUpRequest.getMotDePasse()));  
    
        userRepository.save(user);  
    
        return ResponseEntity.ok(new MessageResponse("Utilisateur enregistré avec succès!"));  
    }
}