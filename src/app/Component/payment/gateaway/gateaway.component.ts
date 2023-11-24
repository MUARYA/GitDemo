import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gateaway',
  templateUrl: './gateaway.component.html',
  styleUrls: ['./gateaway.component.css']
})
export class GateawayComponent implements OnInit {

  imagepath:string="assets/images/googlepay.png";
  imagepath1:string="assets/images/paytm.png";
  imagepath2:string="assets/images/payment5.png";
  imagepath3:string="assets/images/phone.png";
  imagepath4:string="assets/images/footer3.jpg";

  formdata:FormGroup|any;
  payment =" ";
  NetBanking=" "
  constructor(private toastr: ToastrService,private r:Router) { }

  ngOnInit(): void {
  }
  save(){
    this.toastr.success("Otp send to your registered Number")
    this.r.navigate(['/Otp'])
  }

}

