import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

n1:any;
n2:any;
n3:any;
n4:any;
otp=8423
  constructor(private r:Router) { }

  ngOnInit(): void {
  }
  validate(){
let add : any=this.n1+""+this.n2+""+this.n3+""+this.n4;
if(add==this.otp)
  this.r.navigate(['/end'])
else
this.r.navigate(['/fail'])
}
}

