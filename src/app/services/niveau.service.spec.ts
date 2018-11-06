import { TestBed, inject } from '@angular/core/testing';

import { NiveauService } from './niveau.service';

describe('NiveauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NiveauService]
    });
  });

  it('should be created', inject([NiveauService], (service: NiveauService) => {
    expect(service).toBeTruthy();
  }));
});
