import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirlepaymentComponent } from './voirlepayment.component';

describe('VoirlepaymentComponent', () => {
  let component: VoirlepaymentComponent;
  let fixture: ComponentFixture<VoirlepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoirlepaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirlepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
