import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTuteurComponent } from './search-tuteur.component';

describe('SearchTuteurComponent', () => {
  let component: SearchTuteurComponent;
  let fixture: ComponentFixture<SearchTuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
