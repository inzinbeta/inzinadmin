import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitypopupComponent } from './availabilitypopup.component';

describe('AvailabilitypopupComponent', () => {
  let component: AvailabilitypopupComponent;
  let fixture: ComponentFixture<AvailabilitypopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilitypopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
