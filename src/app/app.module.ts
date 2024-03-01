import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddResidenceComponent } from './add-residence/add-residence.component';
@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    TestComponent,
    NotFoundComponent,
    DetailsComponent,
    AddResidenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //ngModel
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
