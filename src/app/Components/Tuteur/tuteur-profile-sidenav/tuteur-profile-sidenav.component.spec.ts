import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurProfileSidenavComponent } from './tuteur-profile-sidenav.component';

describe('TuteurProfileSidenavComponent', () => {
  let component: TuteurProfileSidenavComponent;
  let fixture: ComponentFixture<TuteurProfileSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuteurProfileSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuteurProfileSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
