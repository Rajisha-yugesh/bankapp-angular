import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransactionsComponent } from './delete-transactions.component';

describe('DeleteTransactionsComponent', () => {
  let component: DeleteTransactionsComponent;
  let fixture: ComponentFixture<DeleteTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
