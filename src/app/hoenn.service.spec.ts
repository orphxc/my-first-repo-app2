import { TestBed } from '@angular/core/testing';

import { HoennService } from './hoenn.service';

describe('HoennService', () => {
  let service: HoennService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
