import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { PayementType } from '../model/EtudiantsModel';
import {PService} from "../services/payements.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-fairepayment',
  templateUrl: './fairepayment.component.html',
  styleUrls: ['./fairepayment.component.css']  // Correction : "styleUrl" -> "styleUrls"
})
export class FairepaymentComponent implements OnInit {
  formpayment!: FormGroup;
  studentCode!: string;
  paymentType: string[] = [];
  filepdf!:string;
  paymentData: any;
  fileName = '';
  progresse:boolean=false;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
              private paymentService : PService,  private snackBar: MatSnackBar,
              private router: Router) {}

  ngOnInit() {
    // Remplissage de la liste des types de paiement
    for (let elt in PayementType) {
      let value = PayementType[elt];
      if (typeof value === 'string') {
        this.paymentType.push(value);
      }
    }

    // Récupération du code étudiant depuis les paramètres de route
    this.studentCode = this.activatedRoute.snapshot.params['code'];

    // Initialisation du formulaire avec les contrôles
    this.formpayment = this.fb.group({
      file: this.fb.control(''),
      amount: this.fb.control(''),
      type: this.fb.control(''),
      date: this.fb.control(''),
      studentCode: this.fb.control(this.studentCode)
    });
  }

  // Gestion de la sélection de fichier
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;

      // Créer une URL temporaire pour afficher le fichier
      const fileUrl = URL.createObjectURL(file);

      // Mettez à jour le formulaire avec le fichier sélectionné
      this.formpayment.patchValue({ file: file });

      // Enregistrez l'URL du fichier dans une variable pour le viewer
      this.filepdf = fileUrl;  // Variable pour afficher le fichier dans le viewer
    }
  }

  savepayment() {
this.progresse =true;
    if (this.formpayment.valid) {
      let date :Date = new Date(this.formpayment.value.date);
      let formatdate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()

      let paymentData:FormData = new FormData();
      paymentData.set("date",formatdate);
      paymentData.set("amount",this.formpayment.value.amount);
      paymentData.set("file",this.formpayment.value.file);
      paymentData.set("type",this.formpayment.value.type);
      paymentData.set("studentCode",this.formpayment.value.studentCode);
      this.paymentService.savePayment(paymentData).subscribe({
        next: (response) => {
          this.progresse=false;
          this.snackBar.open('Payment saved successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['snackbar-success'] // Style de notification (facultatif)
          });

          // Redirection après succès
          this.router.navigate(['/admin/payments']); // Redirige vers la page des paiements
        },
        error: (err) => {
          console.error('Error saving payment', err);

          // Afficher une notification d'échec
          this.snackBar.open('Failed to save payment. Please try again.', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['snackbar-error'] // Style de notification (facultatif)
          });
        }
      });
    } else {
      console.log('Form is invalid');
      // on peut afficher ici un message d'erreur si le formulaire n'est pas valide
      this.snackBar.open('Form is invalid. Please fill in all required fields.', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['snackbar-warning'] // Style de notification (facultatif)
      });
    }
  }
}
