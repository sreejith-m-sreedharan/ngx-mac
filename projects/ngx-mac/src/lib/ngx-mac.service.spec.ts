import { TestBed } from '@angular/core/testing';

import { NgxMacService } from './ngx-mac.service';

describe('NgxMacService', () => {
  let service: NgxMacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
