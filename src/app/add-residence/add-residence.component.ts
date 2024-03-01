import { Router } from '@angular/router';
import { Residence } from './../model/residence';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  myForm : FormGroup;
  constructor(private rs:ResidenceService, private _router:Router){}
  ngOnInit(){
    this.myForm=new FormGroup({
      groupe1:new FormGroup({
      name : new FormControl('',[Validators.required]),
      adress : new FormControl('',[Validators.required, Validators.minLength(6)]),
    }),
    image : new FormControl('',Validators.required),

    })
  }

  get name(){
    return this.myForm.get('groupe1').get('name');
  }
  get image(){
    return this.myForm.get('image');
  }
  get adress(){
    return this.myForm.get('groupe1').get('adress');
  }
  get groupe1(){
    return this.myForm.get('groupe1');
  }
  add(){
    let r = new Residence();
    r.address=this.adress.value;
    r.image=this.image.value;
    r.name=this.name.value;
    console.log(r);
    this.rs.addResidence(r).subscribe(()=>
    {this.myForm.reset();
    this._router.navigateByUrl("residence")});
  }
}
