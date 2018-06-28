import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurCardComponent } from './tuteur-card.component';

describe('TuteurCardComponent', () => {
  let component: TuteurCardComponent;
  let fixture: ComponentFixture<TuteurCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
