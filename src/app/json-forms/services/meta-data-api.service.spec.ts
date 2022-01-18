import { TestBed } from '@angular/core/testing';

import { MetaDataApiService } from './meta-data-api.service';

describe('MetaDataApiService', () => {
  let service: MetaDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
