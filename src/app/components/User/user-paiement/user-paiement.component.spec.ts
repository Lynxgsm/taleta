import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaiementComponent } from './user-paiement.component';

describe('UserPaiementComponent', () => {
  let component: UserPaiementComponent;
  let fixture: ComponentFixture<UserPaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
