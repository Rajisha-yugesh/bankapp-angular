import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawForm = this.fb.group({

    acno: ['', [Validators.required]],
    pin: ['', [Validators.required]],
    amount: ['', [Validators.required]],

  })

  constructor(private dataservice: DataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  getError(field) {
    return (this.withdrawForm.get(field).touched || this.withdrawForm.get(field).dirty) && this.withdrawForm.get(field).errors
  }
  withdraw() {
    if (this.withdrawForm.valid) {
      this.dataservice.withdraw(this.withdrawForm.value.acno, this.withdrawForm.value.pin, this.withdrawForm.value.amount)
      .subscribe((result:any)=>{
        alert(result.message);
        alert(result.balance)
      },result =>{
        alert(result.error.message)
      })
    }
   
  }

}
