import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairepaymentComponent } from './fairepayment.component';

describe('FairepaymentComponent', () => {
  let component: FairepaymentComponent;
  let fixture: ComponentFixture<FairepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FairepaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
