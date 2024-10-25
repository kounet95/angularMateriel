package kounettechnologie.kounet.gestionetudiant.repos;

import kounettechnologie.kounet.gestionetudiant.entity.Payment;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentStatus;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GestPayment extends JpaRepository<Payment, Long> {
    List<Payment> findByCodeEtudiant (String code);
    List<Payment> findByPaymentStatus(PaymentStatus paymentStatus);
    List<Payment> findByPaymentType(PaymentType paymentType);

}
