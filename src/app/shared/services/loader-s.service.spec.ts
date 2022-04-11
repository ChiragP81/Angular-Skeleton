import { TestBed } from '@angular/core/testing';

import { LoaderSService } from './loader-s.service';

describe('LoaderSService', () => {
  let service: LoaderSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
