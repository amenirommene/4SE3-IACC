import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { ResidenceComponent } from './residence/residence.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [

  {path:"", redirectTo:"residence", pathMatch:"full"},
  //une route
{path:"residence", component:ResidenceComponent, children:[
  {path:"details/:id/:name", component:DetailsComponent},
]},
{path:"test", component:TestComponent},

{path:"add", component:AddResidenceComponent},
//"**" à placer dans la dernière position
{path:"**", component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
