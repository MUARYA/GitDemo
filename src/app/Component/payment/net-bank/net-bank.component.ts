import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-net-bank',
  templateUrl: './net-bank.component.html',
  styleUrls: ['./net-bank.component.css']
})
export class NetBankComponent implements OnInit {

  imagepath:string="assets/images/hdfc.png";
  imagepath1:string="assets/images/icici.jpg";
  imagepath2:string="assets/images/sbi.png";
  imagepath3:string="assets/images/axis.png";
  imagepath4:string="assets/images/kotak.png";
  imagepath5:string="assets/images/footer5.png";
  imagepath6:string="assets/images/welcome.jpg";
  imagepath7:string="assets/images/bank1.jpg";
  imagepath8:string="assets/images/bank2.jpg";
  imagepath9:string="assets/images/bank3.jpg";
  imagepath10:string="assets/images/bank4.webp"
                     

  formdata:FormGroup|any;
  formdata1:FormGroup|any;
  formdata2:FormGroup|any;
  formdata3:FormGroup|any;
  formdata4:FormGroup|any
  payment=" "
  constructor(private toastr: ToastrService,private fb: FormBuilder,private r:Router) { }

  ngOnInit(): void {
    this.formdata = this.fb.group({
           Account: ['', Validators.required ,Validators.minLength(11),Validators.maxLength(11)],
           Re: ['', Validators.required ,Validators.requiredTrue],
            IFSC: ['', Validators.required ,Validators.minLength(11),Validators.maxLength(11)],
            Account_Holder: ['', Validators.required ,Validators.minLength(6),Validators.maxLength(14) ],
         
      
        });
        this.formdata1 = this.fb.group({
               Account: ['', Validators.required ],
               Re: ['', Validators.required ],
                IFSC: ['', Validators.required ],
                Account_Holder: ['', Validators.required ],
             
          
            });
            this.formdata2 = this.fb.group({
                   Account: ['', Validators.required ],
                   Re: ['', Validators.required ],
                    IFSC: ['', Validators.required ],
                    Account_Holder: ['', Validators.required ],
                 
              
                });
                    
                this.formdata3 = this.fb.group({
                       Account: ['', Validators.required ],
                       Re: ['', Validators.required ],
                        IFSC: ['', Validators.required ],
                        Account_Holder: ['', Validators.required ],
                     
                  
                    });
                    this.formdata4 = this.fb.group({
                           Account: ['', Validators.required ],
                           Re: ['', Validators.required ],
                            IFSC: ['', Validators.required ],
                            Account_Holder: ['', Validators.required ],
                         
                      
                        });
                        
  }
  save(){
    this.toastr.success("Otp send to your registered Number")
    this.r.navigate(['/Otp'])
  }

}

