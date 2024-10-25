import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadetudiantsComponent } from './loadetudiants.component';

describe('LoadetudiantsComponent', () => {
  let component: LoadetudiantsComponent;
  let fixture: ComponentFixture<LoadetudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadetudiantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadetudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
