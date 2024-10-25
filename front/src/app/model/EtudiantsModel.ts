export interface EtudiantsModel{
   id:String,
  firstname:String,
  lastname:String,
  conde:String,
idprogram:String,
  photo:String
}
export interface  Payement{
   id:number,
   date:string,
  montant:string,
  paymentType:PayementType,
  paymentStatus:PayementStatus,
 file:string,
  etudiants: EtudiantsModel,
  codeEtudiant:String
}
export enum PayementType {
  CHECK,CHASH, TRANSFERT, DEPOT,VERSEMENT
}
export enum PayementStatus {
  CREATE,ENCOURS,VALIDER
}
