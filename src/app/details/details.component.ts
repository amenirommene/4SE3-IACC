import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
//injecter le service ActivatedRoute sous
// le nom de ac
  constructor(private ac:ActivatedRoute,
    private _router:Router){
    console.log('je suis le constructor');
  }
  id : number;
ngOnInit(){
 // console.log(this.ac.snapshot.params['id']);
 console.log('je suis ngOnInit');
 this.ac.paramMap.subscribe(res=>{
  console.log(res.get('id'));
  this.id=Number(res.get('id'));
});
}
  getParam(){
    console.log(this.ac.snapshot.params['id']);
  }

  goToTest(){
  this._router.navigateByUrl("/test");
  }
}
