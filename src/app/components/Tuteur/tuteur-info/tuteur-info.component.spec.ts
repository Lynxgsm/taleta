import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurInfoComponent } from './tuteur-info.component';

describe('TuteurInfoComponent', () => {
  let component: TuteurInfoComponent;
  let fixture: ComponentFixture<TuteurInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
