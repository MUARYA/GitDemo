import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  imagepath="assets/images/credit.jpg";
  imagepath2="assets/images/credit2.jpg"

payment=" "
formdata:FormGroup|any
  constructor(private toastr: ToastrService,private fb: FormBuilder,private r:Router) { }

  ngOnInit(): void {
    this.formdata = this.fb.group({
           card_number: ['', Validators.required ,Validators.minLength(16),Validators.maxLength(16)],
           CVV: ['', Validators.required ,Validators.minLength(3),Validators.maxLength(3)],
            MM: ['', Validators.required ,Validators.minLength(2),Validators.maxLength(2)],
            yy: ['', Validators.required,Validators.minLength(4),Validators.maxLength(4) ],
            Name: ['', Validators.required ,Validators.minLength(6),Validators.maxLength(14)],
         
      
        });
  }
  save(){
    this.toastr.success("Otp send to your registered Number")
    this.r.navigate(['/Otp'])
  }

}
