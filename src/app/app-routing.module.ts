import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ConfirmComponent } from './Component/payment/confirm/confirm.component';
import { CreditComponent } from './Component/payment/credit/credit.component';
import { FailComponent } from './Component/payment/fail/fail.component';
import { GateawayComponent } from './Component/payment/gateaway/gateaway.component';

import { NetBankComponent } from './Component/payment/net-bank/net-bank.component';
import { OtpComponent } from './Component/payment/otp/otp.component';
import { PaymentFormComponent } from './Component/payment/payment-form/payment-form.component';
// import { AdminComponent } from './Components/AdminPage/admin/admin.component';
// import { ParkingFloorComponent } from './Components/AdminPage/parking-floor/parking-floor.component';
// import { ParkingPremiseComponent } from './Components/AdminPage/parking-premise/parking-premise.component';
// import { TablesComponent } from './Components/AdminPage/tables/tables.component';
// import { UsersComponent } from './Components/AdminPage/users/users.component';
 
// import { ContactUsComponent } from './Components/MainPage/contact-us/contact-us.component';
// import { HomepageComponent } from './Components/MainPage/homepage/homepage.component';
// import { LoginPageComponent } from './Components/MainPage/login-page/login-page.component';
// import { SignUpPageComponent } from './Components/MainPage/sign-up-page/sign-up-page.component';
// import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch: 'full'},
   {path: 'about', component:AboutComponent},
  // {path: 'show', component:MyBookingsComponent},
  // {path: 'signup', component:SignUpPageComponent},
  // {path: 'login', component:LoginPageComponent},
   {path: 'about', component:AboutComponent},
   {path: 'home', component:HomepageComponent},
   {path: 'contact', component:ContactUsComponent},
  // {path: 'account/:loginId', component:AccountComponent},
  //  {path: 'vehicle', component:MyVehcilesComponent},
  // {path: 'add', component:VehicleFormComponent},
  // {path: 'book', component:MyBookformComponent},
  // {path: 'show/:id', component:ShowDetailsComponent},
  // {path: 'user', component:UserComponent},
  // {path: 'admin', component:AdminComponent},
  // { path: 'ParkingFloors', component: ParkingFloorComponent},
  // { path: 'ParkingSlots', component: ParkingPremiseComponent },
  // { path: 'tables/:id', component: TablesComponent },
  // { path: 'users/details', component: UsersComponent },
  {path: 'payment', component:PaymentFormComponent},
{path: 'gateway', component:GateawayComponent},
{path: 'credit', component:CreditComponent},
{path: 'net', component:NetBankComponent},
{path: 'end', component:ConfirmComponent},

{path: 'Otp', component:OtpComponent},
{path: 'fail', component:FailComponent},
{path: '**', component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
