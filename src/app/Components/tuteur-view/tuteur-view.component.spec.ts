import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurViewComponent } from './tuteur-view.component';

describe('TuteurViewComponent', () => {
  let component: TuteurViewComponent;
  let fixture: ComponentFixture<TuteurViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
