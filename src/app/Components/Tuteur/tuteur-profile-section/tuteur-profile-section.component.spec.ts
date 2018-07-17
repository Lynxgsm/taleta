import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurProfileSectionComponent } from './tuteur-profile-section.component';

describe('TuteurProfileSectionComponent', () => {
  let component: TuteurProfileSectionComponent;
  let fixture: ComponentFixture<TuteurProfileSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurProfileSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurProfileSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
