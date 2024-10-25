package kounettechnologie.kounet.gestionetudiant.repos;

import kounettechnologie.kounet.gestionetudiant.entity.Etudiants;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface gestionRepos extends JpaRepository<Etudiants,String> {
     Etudiants findByConde (String code);

     List<Etudiants>findByIdprogram(String idprogram);

}
