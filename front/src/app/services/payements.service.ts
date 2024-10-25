import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MatTableDataSource} from "@angular/material/table";
import {EtudiantsModel, Payement} from "../model/EtudiantsModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PService {

  constructor(private http:HttpClient) { }
public getAllpayement() : Observable <Array<Payement>>{
  return this.http.get<Array<Payement>>(`${environment.backend}/payments`)
}
  public getAlletudiant() : Observable <Array<EtudiantsModel>>{
    return this.http.get<Array<EtudiantsModel>>(`${environment.backend}/students`)
  }
  public getetudiant(code:string) : Observable <Array<Payement>>{
    return this.http.get<Array<Payement>>(`${environment.backend}/students/${code}/payments`)
  }

  savePayment(paymentData: any):Observable<Payement> {
    return this.http.post<Payement>(`${environment.backend}/payments`, paymentData);
  }
}
