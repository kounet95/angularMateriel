package kounettechnologie.kounet.gestionetudiant.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@NoArgsConstructor @AllArgsConstructor @Builder @Getter @Setter
public class Etudiants {
    @Id
    private String id;
    private String firstname;
    private String lastname;
    @Column(unique = true)
    private String conde;
    private String idprogram;
    private String photo;
}
