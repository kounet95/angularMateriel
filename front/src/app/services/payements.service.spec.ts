import { TestBed } from '@angular/core/testing';

import { PayementsService } from './payements.service';

describe('PayementsService', () => {
  let service: PayementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
