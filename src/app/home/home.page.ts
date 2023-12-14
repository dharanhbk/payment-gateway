import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction-service.service';
// import * as Razorpay from 'razorpay'

declare var Razorpay:any
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _transactionService:TransactionService) {}

  createTransaction(){
    this._transactionService.createTransaction(1000).subscribe({
      next:(res)=>{
        console.log(res)
        this.openTransactionModal(res)
      },error:(err)=>{
        console.log(err)
      }
    })
  }

  openTransactionModal(res:any){
    var options ={
      order_id: res['transactionId'],
      key:res['key'],
      amount:res['amount'],
      currency: res['currency'],
      name:"Payment",
      description:"Payment gateway",
      handler:(res:any)=>{
        this.processTransaction(res)
      },
      prefill:{
        name:"PaymentGateway",
        email:"sample@gmail.com",
        contact:"100111111"
      },
      notes:{
        address:"ERODE"
      },
      theme:{
        color:"#F37254"
      }
    }

    var res = new Razorpay(options)
    res.open();
  }
  processTransaction(res:any){
      console.log("Success response ........"+res)
      console.log(res)
  }


}
