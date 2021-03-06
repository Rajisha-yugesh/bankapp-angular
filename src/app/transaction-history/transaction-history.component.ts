import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  transactions=[];

  constructor(private dataService:DataService) {
   this.getTransactions();
   }
   id = "";
  
   getTransactions(){
     this.dataService.getTransactions()
   .subscribe((data:any)=>{
     this.transactions =data.transactions
   })
  }

  ngOnInit(): void {
  }


  deleteTransaction(e){
    this.dataService.deleteTransactions(e)
    .subscribe((data:any)=>{
      alert(data.message);
      this.id="";
      this.getTransactions();
    })
  }
  onCancel($event){
    this.id="";
  }
  showConfirmationDialog(id){
    this.id=id;
  }

}
