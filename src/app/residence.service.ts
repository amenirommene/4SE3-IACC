import { Apartment } from './model/apartment';
import { Residence } from './model/residence';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  //Scope du service : disponible pour tous les
  //composants/service de l'application
  //combien d'instance à créer de ce service: 1 seule instance
 //=> le design pattern : singleton
  providedIn: 'root'
})
export class ResidenceService {

  urlResidence : string = "http://localhost:3000/residences";
  urlApartment : string = "http://localhost:3000/apartments";
  constructor(private myHttp:HttpClient) { }

  //consommation de l'api qui retourne la liste des résidences
  getAllResidences():Observable<Residence[]>{
    return this.myHttp.get<Residence[]>(this.urlResidence);
  }

  getResidenceById(id:number):Observable<Residence>{
    return this.myHttp.get<Residence>(this.urlResidence+"/"+id);
  }
  addResidence(r:Residence):Observable<Residence>{
    return this.myHttp.post<Residence>(this.urlResidence,r);
  }
  deleteResidence(id:number):Observable<Residence>{
    return this.myHttp.delete<Residence>(this.urlResidence+"/"+id);
  }
  updateResidence(r:Residence):Observable<Residence>{
    return this.myHttp.put<Residence>(this.urlResidence,r);
  }
  getAllApartments():Observable<Apartment[]>{
    return this.myHttp.get<Apartment[]>(this.urlApartment);
  }
}
