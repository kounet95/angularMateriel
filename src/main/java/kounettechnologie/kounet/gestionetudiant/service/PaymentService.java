package kounettechnologie.kounet.gestionetudiant.service;

import kounettechnologie.kounet.gestionetudiant.dto.NewPayment;
import kounettechnologie.kounet.gestionetudiant.entity.Etudiants;
import kounettechnologie.kounet.gestionetudiant.entity.Payment;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentStatus;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentType;
import kounettechnologie.kounet.gestionetudiant.repos.GestPayment;
import kounettechnologie.kounet.gestionetudiant.repos.gestionRepos;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.UUID;

@Service
@Transactional
public class PaymentService {

    private gestionRepos gestionRepos;
    private GestPayment gestPayment;
    public PaymentService(GestPayment gestPayment, gestionRepos gestionRepos) {
        this.gestPayment = gestPayment;
        this.gestionRepos = gestionRepos;
    }

    public Payment savePayment(MultipartFile file, NewPayment newPayment) throws IOException {
        Path folderPath = Paths.get(System.getProperty("user.home"),"kounet-etudiant","payments");
        if(!Files.exists(folderPath)){
            Files.createDirectories(folderPath);
        }
        String fileName = UUID.randomUUID().toString();
        Path filePath = Paths.get(System.getProperty("user.home"),"kounet-etudiant","payments",fileName+".pdf");
        Files.copy(file.getInputStream(), filePath);
        Etudiants student = gestionRepos.findByConde(newPayment.getStudentCode());
        Payment payment=Payment.builder()
                .paymentType(newPayment.getType())
                .paymentStatus(PaymentStatus.CREATE)
                .date(newPayment.getDate())
                .etudiants(student)
                .montant(newPayment.getAmount())
                .file(filePath.toUri().toString())
                .build();
        return gestPayment.save(payment);

    }

    public byte[] getPaymentFile(Long id) throws IOException {
        Payment payment = gestPayment.findById(id).get();
        return Files.readAllBytes(Path.of(URI.create(payment.getFile())));

    }

    public Payment updatePaymentStatus(PaymentStatus status, Long paymentId){
        Payment payment = gestPayment.findById(paymentId).get();
        payment.setPaymentStatus(status);
        return gestPayment.save(payment);
    }
}
