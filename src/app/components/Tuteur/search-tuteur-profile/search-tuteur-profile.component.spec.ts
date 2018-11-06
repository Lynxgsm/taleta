import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTuteurProfileComponent } from './search-tuteur-profile.component';

describe('SearchTuteurProfileComponent', () => {
  let component: SearchTuteurProfileComponent;
  let fixture: ComponentFixture<SearchTuteurProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTuteurProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTuteurProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
