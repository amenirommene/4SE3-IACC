import { ResidenceService } from './../residence.service';
import { TestComponent } from './../test/test.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  //scope du service : les composants de ce module
 // providers : [ResidenceService]
})
export class UserModule { }
