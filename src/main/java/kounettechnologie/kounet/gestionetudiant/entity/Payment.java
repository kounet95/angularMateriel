package kounettechnologie.kounet.gestionetudiant.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Payment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private double montant;
    private PaymentType paymentType;
    private PaymentStatus paymentStatus;
    private String file;
    @ManyToOne
    private Etudiants etudiants;
    private String codeEtudiant;
}
