import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralInformationComponent } from './referral-information.component';

describe('ReferralInformationComponent', () => {
  let component: ReferralInformationComponent;
  let fixture: ComponentFixture<ReferralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
