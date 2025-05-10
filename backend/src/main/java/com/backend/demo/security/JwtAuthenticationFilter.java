package com.backend.demo.security;    
    
import jakarta.servlet.FilterChain;    
import jakarta.servlet.ServletException;    
import jakarta.servlet.http.HttpServletRequest;    
import jakarta.servlet.http.HttpServletResponse;    
import org.springframework.lang.NonNull;    
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;    
import org.springframework.security.core.context.SecurityContextHolder;    
import org.springframework.security.core.userdetails.UserDetails;    
import org.springframework.security.core.userdetails.UserDetailsService;    
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;    
import org.springframework.stereotype.Component;    
import org.springframework.web.filter.OncePerRequestFilter;    
    
import java.io.IOException;    
    
@Component    
public class JwtAuthenticationFilter extends OncePerRequestFilter {    
    
    private final JwtService jwtService;    
    private final UserDetailsService userDetailsService;    
    
    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {    
        this.jwtService = jwtService;    
        this.userDetailsService = userDetailsService;    
    }    
    
    @Override    
    protected void doFilterInternal(    
            @NonNull HttpServletRequest request,    
            @NonNull HttpServletResponse response,    
            @NonNull FilterChain filterChain    
    ) throws ServletException, IOException {    
        final String authHeader = request.getHeader("Authorization");  
          
        // Debug logging  
        System.out.println("Request method: " + request.getMethod());  
        System.out.println("Request path: " + request.getRequestURI());  
        System.out.println("Auth header: " + (authHeader != null ? "Present" : "Missing"));  
          
        final String jwt;    
        final String userEmail;    
    
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {    
            System.out.println("No valid Authorization header found, continuing filter chain");  
            filterChain.doFilter(request, response);    
            return;    
        }    
    
        jwt = authHeader.substring(7);    
        System.out.println("JWT token extracted: " + jwt.substring(0, Math.min(10, jwt.length())) + "...");  
          
        userEmail = jwtService.extractUsername(jwt);    
        System.out.println("Email extracted from token: " + userEmail);  
    
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {    
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);    
            System.out.println("User found: " + userDetails.getUsername());  
            System.out.println("User authorities: " + userDetails.getAuthorities());  
                
            if (jwtService.isTokenValid(jwt, userDetails)) {    
                System.out.println("Token is valid, setting authentication");  
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(    
                        userDetails,    
                        null,    
                        userDetails.getAuthorities()    
                );    
                authToken.setDetails(    
                        new WebAuthenticationDetailsSource().buildDetails(request)    
                );    
                SecurityContextHolder.getContext().setAuthentication(authToken);    
            } else {  
                System.out.println("Token is invalid");  
            }    
        } else {  
            System.out.println("User email is null or authentication already exists in context");  
        }  
          
        System.out.println("Continuing filter chain");  
        filterChain.doFilter(request, response);    
    }    
}