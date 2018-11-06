import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurPlanningComponent } from './tuteur-planning.component';

describe('TuteurPlanningComponent', () => {
  let component: TuteurPlanningComponent;
  let fixture: ComponentFixture<TuteurPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
