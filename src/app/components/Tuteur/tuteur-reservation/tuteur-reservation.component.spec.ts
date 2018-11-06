import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurReservationComponent } from './tuteur-reservation.component';

describe('TuteurReservationComponent', () => {
  let component: TuteurReservationComponent;
  let fixture: ComponentFixture<TuteurReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
