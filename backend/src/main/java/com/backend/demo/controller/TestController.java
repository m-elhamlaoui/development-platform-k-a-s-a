package com.backend.demo.controller;  
  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
@RestController  
@RequestMapping("/api/test")  
public class TestController {  
  
    @GetMapping("/public")  
    public ResponseEntity<String> publicEndpoint() {  
        return ResponseEntity.ok("Cet endpoint est public");  
    }  
  
    @GetMapping("/protected")  
    public ResponseEntity<String> protectedEndpoint() {  
        return ResponseEntity.ok("Cet endpoint est protégé et nécessite une authentification");  
    }  
}