import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IACC4SE3*************************';
  f(n:string){
    console.log("test "+n);
  }
}
