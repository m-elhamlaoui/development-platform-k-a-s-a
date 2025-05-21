package com.backend.demo.service;  
  
import com.backend.demo.dto.AuthenticationRequest;  
import com.backend.demo.dto.AuthenticationResponse;  
import com.backend.demo.dto.RegisterRequest;  
import com.backend.demo.model.Utilisateur;  
import com.backend.demo.repository.UtilisateurRepository;  
import com.backend.demo.security.JwtService;  
import org.junit.jupiter.api.Test;  
import org.junit.jupiter.api.extension.ExtendWith;  
import org.mockito.InjectMocks;  
import org.mockito.Mock;  
import org.mockito.junit.jupiter.MockitoExtension;  
import org.springframework.security.authentication.AuthenticationManager;  
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;  
import org.springframework.security.crypto.password.PasswordEncoder;  
  
import java.util.Optional;  
  
import static org.junit.jupiter.api.Assertions.*;  
import static org.mockito.ArgumentMatchers.any;  
import static org.mockito.Mockito.*;  
  
@ExtendWith(MockitoExtension.class)  
class AuthServiceTest {  
    @Mock  
    private UtilisateurRepository utilisateurRepository;  
      
    @Mock  
    private PasswordEncoder passwordEncoder;  
      
    @Mock  
    private JwtService jwtService;  
      
    @Mock  
    private AuthenticationManager authenticationManager;  
      
    @InjectMocks  
    private AuthService authService;  
      
    @Test  
    void testRegister_Success() {  
        // Arrange  
        RegisterRequest request = new RegisterRequest("Test User", "test@example.com", "password");  
        Utilisateur savedUser = new Utilisateur("Test User", "test@example.com", "encodedPassword");  
          
        when(utilisateurRepository.existsByEmail("test@example.com")).thenReturn(false);  
        when(passwordEncoder.encode("password")).thenReturn("encodedPassword");  
        when(utilisateurRepository.save(any(Utilisateur.class))).thenReturn(savedUser);  
        when(jwtService.generateToken(any(Utilisateur.class))).thenReturn("jwt-token");  
          
        // Act  
        AuthenticationResponse response = authService.register(request);  
          
        // Assert  
        assertNotNull(response);  
        assertEquals("jwt-token", response.getToken());  
        verify(utilisateurRepository).save(any(Utilisateur.class));  
    }  
      
    @Test  
    void testRegister_EmailAlreadyExists() {  
        // Arrange  
        RegisterRequest request = new RegisterRequest("Test User", "test@example.com", "password");  
        when(utilisateurRepository.existsByEmail("test@example.com")).thenReturn(true);  
          
        // Act & Assert  
        assertThrows(RuntimeException.class, () -> authService.register(request));  
    }  
      
    @Test  
    void testAuthenticate_Success() {  
        // Arrange  
        AuthenticationRequest request = new AuthenticationRequest("test@example.com", "password");  
        Utilisateur user = new Utilisateur("Test User", "test@example.com", "encodedPassword");  
          
        when(utilisateurRepository.findByEmail("test@example.com")).thenReturn(Optional.of(user));  
        when(jwtService.generateToken(user)).thenReturn("jwt-token");  
          
        // Act  
        AuthenticationResponse response = authService.authenticate(request);  
          
        // Assert  
        assertNotNull(response);  
        assertEquals("jwt-token", response.getToken());  
        verify(authenticationManager).authenticate(any(UsernamePasswordAuthenticationToken.class));  
    }  
      
    @Test  
    void testAuthenticate_UserNotFound() {  
        // Arrange  
        AuthenticationRequest request = new AuthenticationRequest("test@example.com", "password");  
          
        when(utilisateurRepository.findByEmail("test@example.com")).thenReturn(Optional.empty());  
        when(authenticationManager.authenticate(any())).thenReturn(null);  
          
        // Act & Assert  
        assertThrows(RuntimeException.class, () -> authService.authenticate(request));  
    }  
}