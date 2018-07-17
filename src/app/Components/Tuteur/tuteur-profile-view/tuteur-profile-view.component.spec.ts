import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurProfileViewComponent } from './tuteur-profile-view.component';

describe('TuteurProfileViewComponent', () => {
  let component: TuteurProfileViewComponent;
  let fixture: ComponentFixture<TuteurProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
