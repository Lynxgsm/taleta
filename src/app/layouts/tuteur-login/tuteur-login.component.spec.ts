import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurLoginComponent } from './tuteur-login.component';

describe('TuteurLoginComponent', () => {
  let component: TuteurLoginComponent;
  let fixture: ComponentFixture<TuteurLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
