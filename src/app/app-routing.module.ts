import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

import { RentComponent } from './rent/rent.component';
import { Rent1Component } from './rent1/rent1.component';
import { Rent2Component } from './rent2/rent2.component';
import { Rent3Component } from './rent3/rent3.component';
import { Rent4Component } from './rent4/rent4.component';
import { Rent5Component } from './rent5/rent5.component';
import { Rent6Component } from './rent6/rent6.component';
import { Rent7Component } from './rent7/rent7.component';
import { Rent8Component } from './rent8/rent8.component';
import { Rent9Component } from './rent9/rent9.component';
import { Rent10Component } from './rent10/rent10.component';
import { Rent11Component } from './rent11/rent11.component';
import { Rent12Component } from './rent12/rent12.component';

import { SaleComponent } from './sale/sale.component';
import { Sale1Component } from './sale1/sale1.component';
import { Sale2Component } from './sale2/sale2.component';
import { Sale3Component } from './sale3/sale3.component';
import { Sale4Component } from './sale4/sale4.component';
import { Sale5Component } from './sale5/sale5.component';
import { Sale6Component } from './sale6/sale6.component';
import { Sale7Component } from './sale7/sale7.component';
import { Sale8Component } from './sale8/sale8.component';
import { Sale9Component } from './sale9/sale9.component';
import { Sale10Component } from './sale10/sale10.component';
import { Sale11Component } from './sale11/sale11.component';
import { Sale12Component } from './sale12/sale12.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component: HomeComponent ,pathMatch: 'full'},
  {path: 'About', component: AboutComponent },
  {path: 'Contact', component: ContactComponent },
  {path: 'Signup', component: SignupComponent },
  {path: 'Rent', component: RentComponent },
  {path: 'Rent1', component: Rent1Component },
  {path: 'Rent2', component: Rent2Component },
  {path: 'Rent3', component: Rent3Component },
  {path: 'Rent4', component: Rent4Component },
  {path: 'Rent5', component: Rent5Component },
  {path: 'Rent6', component: Rent6Component },
  {path: 'Rent7', component: Rent7Component },
  {path: 'Rent8', component: Rent8Component },
  {path: 'Rent9', component: Rent9Component },
  {path: 'Rent10', component: Rent10Component },
  {path: 'Rent11', component: Rent11Component },
  {path: 'Rent12', component: Rent12Component },
  {path: 'Sale', component: SaleComponent },
  {path: 'Sale1', component: Sale1Component },
  {path: 'Sale2', component: Sale2Component },
  {path: 'Sale3', component: Sale3Component },
  {path: 'Sale4', component: Sale4Component },
  {path: 'Sale5', component: Sale5Component },
  {path: 'Sale6', component: Sale6Component },
  {path: 'Sale7', component: Sale7Component },
  {path: 'Sale8', component: Sale8Component },
  {path: 'Sale9', component: Sale9Component },
  {path: 'Sale10', component: Sale10Component },
  {path: 'Sale11', component: Sale11Component },
  {path: 'Sale12', component: Sale12Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
