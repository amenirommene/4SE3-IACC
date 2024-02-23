import { Component } from '@angular/core';
import { Apartment } from '../model/apartment';
import { Residence } from '../model/residence';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

constructor(private rs:ResidenceService){}
title="dfghjkl";
listResidences:Residence[]=[];
listApartments:Apartment[]=[];
listApart : Apartment[]=[];
getApartments(r:Residence){
  console.log(this.listApartments);
  this.listApart=[];
for (let a of  this.listApartments){

if (a.residence.id == r.id){
  console.log(a.residence);
  this.listApart.push(a);
}
}
console.log(this.listApart);
}
ngOnInit(){
 this.rs.getAllResidences().subscribe
 (res=>this.listResidences=res);
 this.rs.getAllApartments().subscribe
 (res=>this.listApartments=res);
}

delete(r:Residence){
  this.rs.deleteResidence(r.id).subscribe(
    //traitement qui dépend de la suppression
    ()=>this.rs.getAllResidences().subscribe
    (res=>this.listResidences=res)
  );}

  //traitement indépendent

}
