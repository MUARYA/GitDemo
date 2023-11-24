import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  constructor(private http:HttpClient,private tostr:ToastrService) { }
  getPayment():Observable<Payment[]>{
    return this.http.get<Payment[]>("http://localhost:8081/NutriApp/Payment");
  }
  
  addPayment(p1:Payment):Observable<Payment>{
    // alert(JSON.stringify(p))
    this.tostr.success("Payment Registered");
    return this.http.post<Payment>("http://localhost:8081/NutriApp/Payment/savePayment",p1);
    
  }
  UpdatePayment(p1:Payment):Observable<Payment>{
    // alert(JSON.stringify(p))
    return this.http.put<Payment>("http://localhost:8081/NutriApp/Payment/updatePayment",p1);
  }
  ShowPayment(p1:Payment):Observable<Payment>{
    // alert(JSON.stringify(p))
    return this.http.get<Payment>("http://localhost:8081/NutriApp/Payment/showPlans");
  }
  // cancelBooking(paymentId:number):Observable<Payment>{
  //   return this.http.get<Payment>(`http://localhost:8080/ParkingSlotAllocation/payment/cancelBooking/${paymentId}`);
  // }
}
