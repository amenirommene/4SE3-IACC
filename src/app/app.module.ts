import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    TestComponent,
    NotFoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //ngModel
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
