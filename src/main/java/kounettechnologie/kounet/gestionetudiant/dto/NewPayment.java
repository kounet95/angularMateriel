package kounettechnologie.kounet.gestionetudiant.dto;

import kounettechnologie.kounet.gestionetudiant.entity.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class NewPayment {
    private double amount;
    private PaymentType type;
   private LocalDate date;
   private String studentCode;
}
