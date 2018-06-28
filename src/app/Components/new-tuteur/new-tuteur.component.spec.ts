import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTuteurComponent } from './new-tuteur.component';

describe('NewTuteurComponent', () => {
  let component: NewTuteurComponent;
  let fixture: ComponentFixture<NewTuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
