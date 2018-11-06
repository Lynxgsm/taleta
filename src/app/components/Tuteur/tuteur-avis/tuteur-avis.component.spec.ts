import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurAvisComponent } from './tuteur-avis.component';

describe('TuteurAvisComponent', () => {
  let component: TuteurAvisComponent;
  let fixture: ComponentFixture<TuteurAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
