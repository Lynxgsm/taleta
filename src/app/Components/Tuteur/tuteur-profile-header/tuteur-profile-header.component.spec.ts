import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurProfileHeaderComponent } from './tuteur-profile-header.component';

describe('TuteurProfileHeaderComponent', () => {
  let component: TuteurProfileHeaderComponent;
  let fixture: ComponentFixture<TuteurProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
