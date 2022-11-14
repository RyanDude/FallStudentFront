import { TestBed } from '@angular/core/testing';

import { IpServicService } from './ip-servic.service';

describe('IpServicService', () => {
  let service: IpServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
