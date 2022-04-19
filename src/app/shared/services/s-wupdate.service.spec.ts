import { TestBed } from '@angular/core/testing';

import { SWupdateService } from './s-wupdate.service';

describe('SWupdateService', () => {
  let service: SWupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SWupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
