package kounettechnologie.kounet.gestionetudiant.web;

import kounettechnologie.kounet.gestionetudiant.dto.NewPayment;
import kounettechnologie.kounet.gestionetudiant.entity.Etudiants;
import kounettechnologie.kounet.gestionetudiant.entity.Payment;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentStatus;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentType;
import kounettechnologie.kounet.gestionetudiant.repos.GestPayment;
import kounettechnologie.kounet.gestionetudiant.repos.gestionRepos;
import kounettechnologie.kounet.gestionetudiant.service.PaymentService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin("*")
public class ControllerGestion {
    private gestionRepos gestionRepos;
    private GestPayment gestPayment;

    private PaymentService paymentService;

    public ControllerGestion(gestionRepos gestionRepos, GestPayment gestPayment, PaymentService paymentService) {
        this.gestionRepos = gestionRepos;
        this.gestPayment = gestPayment;
        this.paymentService = paymentService;
    }

    @GetMapping(path = "/students")
    public List<Etudiants> allStudents() {
        return gestionRepos.findAll();
    }

    @GetMapping("/students/{code}")
    public Etudiants getStudentByCode(@PathVariable String code) {
        return gestionRepos.findByConde(code);
    }

    @GetMapping(path = "/studentsByProgram")
    public List<Etudiants> studentsByProgram(@RequestParam String idprogram) {
        return gestionRepos.findByIdprogram(idprogram);
    }

    @GetMapping("/payments")
    public List<Payment> allPayments() {
        return gestPayment.findAll();
    }

    @GetMapping("/payments/{id}")
    public Payment getPaymentById(@PathVariable Long id) {
        return gestPayment.findById(id).get();
    }

    @GetMapping("/students/{code}/payments")
    public List<Payment> paymentsByStudentCode(@PathVariable String code) {
        return gestPayment.findByCodeEtudiant(code);
    }

    @GetMapping("/paymentsByStatus")
    public List<Payment> paymentsByStaus(@RequestParam PaymentStatus status) {
        return gestPayment.findByPaymentStatus(status);
    }

    @PutMapping("/payments/{paymentId}/updateStatus")
    public Payment updatePaymentStatus(@RequestParam PaymentStatus status, @PathVariable Long paymentId) {
        return paymentService.updatePaymentStatus(status, paymentId);
    }

    @PostMapping(path = "/payments", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Payment savePayment(@RequestParam ("file") MultipartFile file, NewPayment newPayment) throws IOException {
        return paymentService.savePayment(file, newPayment);

    }

    @GetMapping(path = "payments/{id}/file", produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] getPaymentFile(@PathVariable Long id) throws IOException {
        return paymentService.getPaymentFile(id);

    }
}


