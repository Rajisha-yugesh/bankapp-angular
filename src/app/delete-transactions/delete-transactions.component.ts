import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-transactions',
  templateUrl: './delete-transactions.component.html',
  styleUrls: ['./delete-transactions.component.css']
})
export class DeleteTransactionsComponent implements OnInit {

  @Input() id: string;


  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.id);
  }
  cancel(){
    this.onCancel.emit(this.id);
  }
}