import { TestBed, inject } from '@angular/core/testing';

import { TuteurService } from './tuteur.service';

describe('TuteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuteurService]
    });
  });

  it('should be created', inject([TuteurService], (service: TuteurService) => {
    expect(service).toBeTruthy();
  }));
});
