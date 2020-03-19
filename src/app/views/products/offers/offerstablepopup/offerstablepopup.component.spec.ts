import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferstablepopupComponent } from './offerstablepopup.component';

describe('OfferstablepopupComponent', () => {
  let component: OfferstablepopupComponent;
  let fixture: ComponentFixture<OfferstablepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferstablepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferstablepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
