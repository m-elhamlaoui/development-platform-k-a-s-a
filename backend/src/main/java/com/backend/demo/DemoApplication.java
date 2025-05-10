package com.backend.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.backend.demo.repository.ScoreQuizRepository;
import com.backend.demo.repository.UtilisateurRepository;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    CommandLineRunner run(UtilisateurRepository userRepo, ScoreQuizRepository scoreRepo) {
        return args -> {
            /*
            // ✅ Créer un utilisateur
            Utilisateur u = new Utilisateur("Asma", "asma@example.com", "password");
            userRepo.save(u);

            // ✅ Créer un score sans utiliser LocalDateTime
            ScoreQuiz s = new ScoreQuiz("Mars", 90, u);
            scoreRepo.save(s);

            // ✅ Affichage de vérification
            System.out.println("✔️ Utilisateur et score enregistrés avec succès !");
             */
        };
    }
}
