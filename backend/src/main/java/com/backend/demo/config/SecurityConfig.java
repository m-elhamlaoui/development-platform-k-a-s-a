package com.backend.demo.config;    
    
import com.backend.demo.security.JwtAuthenticationFilter;    
import org.springframework.context.annotation.Bean;    
import org.springframework.context.annotation.Configuration;  
import org.springframework.http.HttpMethod;  
import org.springframework.security.authentication.AuthenticationManager;    
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;    
import org.springframework.security.config.annotation.web.builders.HttpSecurity;    
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;    
import org.springframework.security.config.http.SessionCreationPolicy;    
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;    
import org.springframework.security.crypto.password.PasswordEncoder;    
import org.springframework.security.web.SecurityFilterChain;    
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;    
import org.springframework.web.cors.CorsConfiguration;    
import org.springframework.web.cors.CorsConfigurationSource;    
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;    
    
import java.util.Arrays;    
    
@Configuration    
@EnableWebSecurity    
public class SecurityConfig {    
    
    private final JwtAuthenticationFilter jwtAuthFilter;    
    
    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {    
        this.jwtAuthFilter = jwtAuthFilter;    
    }    
    
    @Bean    
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {    
        http    
            .csrf(csrf -> csrf.disable())    
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))    
            .authorizeHttpRequests(auth -> auth    
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()  // Allow preflight requests  
                .requestMatchers("/api/auth/**").permitAll()    
                .anyRequest().authenticated()    
            )    
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))    
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);    
            
        return http.build();    
    }    
    
    @Bean    
    public CorsConfigurationSource corsConfigurationSource() {    
        CorsConfiguration configuration = new CorsConfiguration();    
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));    
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));    
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept"));    
        configuration.setExposedHeaders(Arrays.asList("Authorization"));  
        configuration.setAllowCredentials(true);    
        configuration.setMaxAge(3600L); // Cache preflight response for 1 hour  
            
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();    
        source.registerCorsConfiguration("/**", configuration);    
        return source;    
    }    
    
    @Bean    
    public PasswordEncoder passwordEncoder() {    
        return new BCryptPasswordEncoder();    
    }    
    
    @Bean    
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {    
        return config.getAuthenticationManager();    
    }    
}