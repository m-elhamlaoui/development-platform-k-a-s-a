package com.backend.demo.controller;  
  
import com.backend.demo.model.Utilisateur;  
import com.backend.demo.repository.UtilisateurRepository;  
import org.springframework.http.ResponseEntity;  
import org.springframework.security.crypto.password.PasswordEncoder;  
import org.springframework.web.bind.annotation.*;  
  
import java.util.List;  
import java.util.Optional;  
  
@RestController  
@RequestMapping("/api/utilisateurs")  
public class UtilisateurController {  
  
    private final UtilisateurRepository utilisateurRepository;  
    private final PasswordEncoder passwordEncoder;  
  
    public UtilisateurController(UtilisateurRepository utilisateurRepository, PasswordEncoder passwordEncoder) {  
        this.utilisateurRepository = utilisateurRepository;  
        this.passwordEncoder = passwordEncoder;  
    }  
  
    @GetMapping  
    public List<Utilisateur> getAllUtilisateurs() {  
        return utilisateurRepository.findAll();  
    }  
  
    @GetMapping("/{id}")  
    public ResponseEntity<Utilisateur> getUtilisateurById(@PathVariable Long id) {  
        Optional<Utilisateur> utilisateur = utilisateurRepository.findById(id);  
        return utilisateur.map(ResponseEntity::ok)  
                .orElse(ResponseEntity.notFound().build());  
    }  
  
    @PutMapping("/{id}")  
    public ResponseEntity<Utilisateur> updateUtilisateur(@PathVariable Long id, @RequestBody Utilisateur utilisateurDetails) {  
        return utilisateurRepository.findById(id)  
                .map(utilisateur -> {  
                    utilisateur.setNom(utilisateurDetails.getNom());  
                    utilisateur.setEmail(utilisateurDetails.getEmail());  
                    // Ne pas mettre à jour le mot de passe directement ici (il faudrait l'encoder)  
                    if (utilisateurDetails.getMotDePasse() != null && !utilisateurDetails.getMotDePasse().isEmpty()) {  
                        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateurDetails.getMotDePasse()));  
                    }  
                    return ResponseEntity.ok(utilisateurRepository.save(utilisateur));  
                })  
                .orElse(ResponseEntity.notFound().build());  
    }  
  
    @DeleteMapping("/{id}")  
    public ResponseEntity<Void> deleteUtilisateur(@PathVariable Long id) {  
        return utilisateurRepository.findById(id)  
                .map(utilisateur -> {  
                    utilisateurRepository.delete(utilisateur);  
                    return ResponseEntity.ok().<Void>build();  
                })  
                .orElse(ResponseEntity.notFound().build());  
    }  
}