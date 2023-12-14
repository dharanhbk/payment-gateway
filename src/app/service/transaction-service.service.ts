import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url:string;

  constructor(
    private http: HttpClient
  ) {
    this.url="http://localhost:8080/transaction"
   }

  createTransaction(amount:number){
    return this.http.get(`${this.url}/${amount}`)
  }
}
