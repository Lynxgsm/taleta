import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurSigninComponent } from './tuteur-signin.component';

describe('TuteurSigninComponent', () => {
  let component: TuteurSigninComponent;
  let fixture: ComponentFixture<TuteurSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
