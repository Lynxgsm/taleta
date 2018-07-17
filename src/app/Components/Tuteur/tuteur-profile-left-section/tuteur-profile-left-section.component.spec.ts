import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurProfileLeftSectionComponent } from './tuteur-profile-left-section.component';

describe('TuteurProfileLeftSectionComponent', () => {
  let component: TuteurProfileLeftSectionComponent;
  let fixture: ComponentFixture<TuteurProfileLeftSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurProfileLeftSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurProfileLeftSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
