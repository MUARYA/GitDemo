import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreditComponent } from './Component/payment/credit/credit.component';
import { ConfirmComponent } from './Component/payment/confirm/confirm.component';
import { FailComponent } from './Component/payment/fail/fail.component';

import { NetBankComponent } from './Component/payment/net-bank/net-bank.component';
import { OtpComponent } from './Component/payment/otp/otp.component';
import { PaymentFormComponent } from './Component/payment/payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { GateawayComponent } from './Component/payment/gateaway/gateaway.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
    CreditComponent,
    ConfirmComponent,
    FailComponent,
    GateawayComponent,
    NetBankComponent,
    OtpComponent,
    PaymentFormComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
     BrowserAnimationsModule, 
    ToastrModule.forRoot()],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
