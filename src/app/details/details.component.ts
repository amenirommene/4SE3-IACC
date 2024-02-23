import { Residence } from './../model/residence';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
//injecter le service ActivatedRoute sous
// le nom de ac
  constructor(private ac:ActivatedRoute,
    private _router:Router, private rs:ResidenceService){
    console.log('je suis le constructor');
  }
  id : number;
  residence:Residence=new Residence();
ngOnInit(){
 // console.log(this.ac.snapshot.params['id']);
 console.log('je suis ngOnInit');
 this.ac.paramMap.subscribe(res=>{
  console.log(res.get('id'));
  this.id=Number(res.get('id'));
  //a appler ici car il dépende de la valeur de l'id récupérer
  this.rs.getResidenceById(this.id).subscribe(res=>{console.log(res),this.residence=res})
});
//

}
  getParam(){
    console.log(this.ac.snapshot.params['id']);
  }

  goToTest(){
  this._router.navigateByUrl("/test");
  }
}
