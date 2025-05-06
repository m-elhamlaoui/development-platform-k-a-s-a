package com.backend.demo.controller;  
  
import com.backend.demo.dto.AuthenticationRequest;  
import com.backend.demo.dto.AuthenticationResponse;  
import com.backend.demo.dto.RegisterRequest;  
import com.backend.demo.service.AuthService;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
@RestController  
@RequestMapping("/api/auth")  
public class AuthController {  
  
    private final AuthService authService;  
  
    public AuthController(AuthService authService) {  
        this.authService = authService;  
    }  
  
    @PostMapping("/register")  
    public ResponseEntity<AuthenticationResponse> register(  
            @RequestBody RegisterRequest request  
    ) {  
        return ResponseEntity.ok(authService.register(request));  
    }  
  
    @PostMapping("/authenticate")  
    public ResponseEntity<AuthenticationResponse> authenticate(  
            @RequestBody AuthenticationRequest request  
    ) {  
        return ResponseEntity.ok(authService.authenticate(request));  
    }  
}