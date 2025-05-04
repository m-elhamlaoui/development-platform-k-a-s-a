package com.backend.demo.security.jwt;  
  
import java.security.Key;  
import java.util.Date;  
  
import org.slf4j.Logger;  
import org.slf4j.LoggerFactory;  
import org.springframework.beans.factory.annotation.Value;  
import org.springframework.security.core.Authentication;  
import org.springframework.stereotype.Component;  
  
import com.backend.demo.security.services.UserDetailsImpl;  
  
import io.jsonwebtoken.*;  
import io.jsonwebtoken.io.Decoders;  
import io.jsonwebtoken.security.Keys;  
  
@Component  
public class JwtUtils {  
    private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);  
  
    @Value("${app.jwtSecret}")  
    private String jwtSecret;  
  
    @Value("${app.jwtExpirationMs}")  
    private int jwtExpirationMs;  
  
    public String generateJwtToken(Authentication authentication) {  
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();  
  
        return Jwts.builder()  
            .setSubject((userPrincipal.getUsername()))  
            .setIssuedAt(new Date())  
            .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))  
            .signWith(key(), SignatureAlgorithm.HS256)  
            .compact();  
    }  
      
    private Key key() {  
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));  
    }  
  
    public String getUserNameFromJwtToken(String token) {  
        return Jwts.parserBuilder().setSigningKey(key()).build()  
            .parseClaimsJws(token).getBody().getSubject();  
    }  
  
    public boolean validateJwtToken(String authToken) {  
        try {  
            Jwts.parserBuilder().setSigningKey(key()).build().parse(authToken);  
            return true;  
        } catch (MalformedJwtException e) {  
            logger.error("Token JWT invalide: {}", e.getMessage());  
        } catch (ExpiredJwtException e) {  
            logger.error("Token JWT expiré: {}", e.getMessage());  
        } catch (UnsupportedJwtException e) {  
            logger.error("Token JWT non supporté: {}", e.getMessage());  
        } catch (IllegalArgumentException e) {  
            logger.error("La chaîne claims JWT est vide: {}", e.getMessage());  
        }  
  
        return false;  
    }  
}