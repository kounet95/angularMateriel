package kounettechnologie.kounet.gestionetudiant;

import kounettechnologie.kounet.gestionetudiant.entity.Etudiants;
import kounettechnologie.kounet.gestionetudiant.entity.Payment;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentStatus;
import kounettechnologie.kounet.gestionetudiant.entity.PaymentType;
import kounettechnologie.kounet.gestionetudiant.repos.GestPayment;
import kounettechnologie.kounet.gestionetudiant.repos.gestionRepos;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class GestionetudiantApplication {

    public static void main(String[] args) {
        SpringApplication.run(GestionetudiantApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(gestionRepos gestionRepos, GestPayment gestPayment){
        return args -> {
            gestionRepos.save(Etudiants.builder().id(UUID.randomUUID().toString())
                    .conde("112233").firstname("Alpha").idprogram("GLSID").build());
            gestionRepos.save(Etudiants.builder().id(UUID.randomUUID().toString())
                    .conde("112244").firstname("Oumar").idprogram("GLSID").build());
            gestionRepos.save(Etudiants.builder().id(UUID.randomUUID().toString())
                    .conde("112255").firstname("Kounet").idprogram("BDCC").build());
            gestionRepos.save(Etudiants.builder().id(UUID.randomUUID().toString())
                    .conde("112266").firstname("Bayo").idprogram("BDCC").build());

            PaymentType[] paymentTypes = PaymentType.values();
            Random random=new Random();
            gestionRepos.findAll().forEach(st->{
                for (int i = 0; i <10 ; i++) {
                    int index = random.nextInt(paymentTypes.length);
                    Payment payment = Payment.builder()
                            .codeEtudiant(st.getConde())
                            .date(LocalDate.now())
                            .montant(1000+(int)(Math.random()*20000))
                            .paymentType(paymentTypes[index])
                            .paymentStatus(PaymentStatus.CREATE)
                            .etudiants(st)
                            .build();
                    gestPayment.save(payment);
                }
            });
        };
    }
}
