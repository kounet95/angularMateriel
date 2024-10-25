import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {environment} from "../../environments/environment";
import {PService} from "../services/payements.service";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit, AfterViewInit{
  public payments : any;
  public displayedColumns = ['id','date','paymentType','codeEtudiant','paymentStatus','montant','firstname'];
  public dataSource : any;



  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  constructor(private paymservices:PService) {
  }
  ngOnInit() {
    this.paymservices.getAllpayement()
      .subscribe({
        next : value => {
          this.payments = value;
          this.dataSource = new MatTableDataSource(this.payments);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error : err => {
          console.log(err);
        }
      })
  }
  ngAfterViewInit() {

  }
}
