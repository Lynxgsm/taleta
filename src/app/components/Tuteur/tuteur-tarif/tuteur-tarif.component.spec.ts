import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurTarifComponent } from './tuteur-tarif.component';

describe('TuteurTarifComponent', () => {
  let component: TuteurTarifComponent;
  let fixture: ComponentFixture<TuteurTarifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurTarifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
