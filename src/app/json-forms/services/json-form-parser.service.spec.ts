import { TestBed } from '@angular/core/testing';

import { JsonFormParserService } from './json-form-parser.service';

describe('JsonFormParserService', () => {
  let service: JsonFormParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFormParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
