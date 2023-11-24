import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/model/payment';
import { PaymentStatus } from 'src/app/model/payment-status';
import { PaymentType } from 'src/app/model/payment-type';
import { PaymentServiceService } from 'src/app/Services/payment.service.service';


// import { User } from 'src/app/model/user';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  imagepath:string="assets/images/pay3.jpg";
  imagepath1:string="assets/images/footer2.png";
  public currentPaymentId:number|any;
  formdata:FormGroup|any;
  payment =" "
 payments:Payment[];
 isUpdate:boolean=false;
   constructor(private fb:FormBuilder,public service : PaymentServiceService,private router:Router,private toastr: ToastrService) {
     this.payments=new Array();
    }
    ngOnInit() {
      console.log("ng on init");
       this.formdata = this.fb.group({
        id: ['', Validators.required ,Validators.minLength(3),Validators.maxLength(3) ],
       type: ['', Validators.required ],
      paymentDate: ['', Validators.required ],
      create_At: ['', Validators.required ],
      updated_At: ['', Validators.required ],
       amountPaid: ['', Validators.required ],
       //status: ['', Validators.required ],
       planId: ['', Validators.required ],
             firstName: ['', Validators.required ,Validators.name ],
             lastName: ['', Validators.required , Validators.name],
             email: ['', Validators.required , Validators.email ],
             mobile: ['', Validators.required ],
      });
        this.service.getPayment()
            .subscribe(
              data =>{this.payments = data;},
               err => {console.log(err)}
                );
         }
        
        savePayment(){
           let data= this.formdata.value;
          //  let u=new User(data.userId,data.firstName,data.lastName,data.email,data.mobile,true)
           let p1=new Payment(data.id,PaymentType.DEBIT_CARD,data.paymentDate,data.create_At,data. updated_At, data.amountPaid,PaymentStatus.CONFIRMED,data.planId)
           
           console.log(JSON.stringify(p1))
           if (!this.isUpdate){
             this.service.addPayment(p1)
             .subscribe(() => {
               this.toastr.success("Payment Registered");
               console.log(p1);
               this.service.getPayment().subscribe(emps => {
                 this.payments=emps;
               });
             });
             this.router.navigate(['/gateway'])
           }
          else {
           this.service.UpdatePayment(p1).subscribe(data => {
             alert("payment is updated");
             this.service.getPayment().subscribe(emps => {
               this.payments=emps;
             });
           });
           this.isUpdate = false;
          }
          this.formdata.reset();
        }
      
      
      UpdatePayment(data:any) {
      
        let emp = this.payments.find(e => e.id == data.id)
      
        this.formdata = this.fb.group({
      
          id: [emp?.id, Validators.required],
      
          type: [emp?.type, Validators.required],
          paymentDate: [emp?.type, Validators.required ],
          create_At: [emp?.type,, Validators.required ],
      updated_At: [emp?.type,, Validators.required ],
      amountPaid:[emp?.amountPaid,Validators.required],
      status:[emp?.status,Validators.required],
          planId: [emp?.planId, Validators.required],
      
          
      
          
      
          //owner:[emp?.owner,Validators.required],
      
      //     userId: [emp?.users.userId, Validators.required],
      
      //   firstName: [emp?.users.firstName, Validators.required],
      
      // lastName: [emp?.users.lastName, Validators.required],
      
      //   email: [emp?.users.email, Validators.required],
      
      //   mobile: [emp?.users.mobile, Validators.required],
      
      //   isActive: [emp?.users.active, Validators.required],
      
        });
      
        this.isUpdate=true;
      
      }
   }
      

