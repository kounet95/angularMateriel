import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EtudiantsModel, Payement} from "../model/EtudiantsModel";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PService} from "../services/payements.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-detailpayment',
  templateUrl: './detailpayment.component.html',
  styleUrl: './detailpayment.component.css'
})
export class DetailpaymentComponent implements OnInit, AfterViewInit{
  public payments !: Array<Payement>;
  public displayedColumns = ['id','date','paymentType','codeEtudiant','paymentStatus','montant','firstname'];
  public dataSource!: MatTableDataSource<Payement>;
  code!:string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private activatedRoute: ActivatedRoute,private paymservices: PService,
  private route :Router
  ) {
  }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.params["code"]
    this.paymservices.getetudiant(this.code).subscribe({
      next: value => {
        this.payments = value;
        this.dataSource = new MatTableDataSource(this.payments);

      },
      error: err => {
        console.log(err);
      }
    });
  }

  ngAfterViewInit() {
  }


  effectuerpayment() {
this.route.navigateByUrl(`/admin/eff/${this.code}`)
  }
}
