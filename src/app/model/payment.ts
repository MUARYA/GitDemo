import { PaymentStatus } from "./payment-status";
import { PaymentType } from "./payment-type";

export class Payment {
     id:number;
     type:PaymentType;
     
     paymentDate:Date
     create_At:Date;
     updated_At:Date;
     amountPaid:number;
     status:PaymentStatus;
     planId:number;
     constructor( id:number,  type:PaymentType, paymentDate:Date, create_At:Date,updated_At:Date,amountPaid:number,status:PaymentStatus,planId:number) {
     this.id=id;
     this.type=type;
     
     this.paymentDate=paymentDate;
     this.create_At=create_At;
     this.updated_At=updated_At;
     this.amountPaid=amountPaid;
     this.status=status;
     this.planId=planId;

    }
    public toString(): String {
        return "Payment[id=" + this.id + ", type="+ this.type + ", paymentDate="
        + this.paymentDate + ", create_At=" + this.create_At + ", updated_At=" + this.updated_At +  ",amountPaid=" + this.amountPaid +", status=" + this.status + ", planId=" + this.planId + "]";
    }

 
}
