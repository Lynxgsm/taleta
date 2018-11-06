import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMatiereComponent } from './select-matiere.component';

describe('SelectMatiereComponent', () => {
  let component: SelectMatiereComponent;
  let fixture: ComponentFixture<SelectMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
