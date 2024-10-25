import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PService} from "../services/payements.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {EtudiantsModel} from "../model/EtudiantsModel";  // Import du Router

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrl: './etudiants.component.css'
})
export class EtudiantsComponent implements OnInit, AfterViewInit {
  public payments: any;
  public etudiantsModel!:EtudiantsModel
  public displayedColumns = ["id", "firstname", "lastname", "conde", "idprogram", "photo"];
  public dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paymservices: PService, private router: Router) {
  }

  ngOnInit() {
    this.paymservices.getAlletudiant()
      .subscribe({
        next: value => {
          this.payments = value;
          this.dataSource = new MatTableDataSource(this.payments);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: err => {
          console.log(err);
        }
      });
  }

  ngAfterViewInit() {
  }

  detailepayement(etudiantsModel: EtudiantsModel) {
    this.router.navigateByUrl(`/admin/plus/${etudiantsModel.conde}`);
  }

  effectuerpayment() {
    this.router.navigateByUrl(`/admin/effectuerpayment/${this.etudiantsModel.conde}`)
  }
}
