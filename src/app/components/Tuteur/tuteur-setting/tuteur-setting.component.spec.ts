import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurSettingComponent } from './tuteur-setting.component';

describe('TuteurSettingComponent', () => {
  let component: TuteurSettingComponent;
  let fixture: ComponentFixture<TuteurSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
