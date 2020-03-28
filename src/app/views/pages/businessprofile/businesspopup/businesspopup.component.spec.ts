import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesspopupComponent } from './businesspopup.component';

describe('BusinesspopupComponent', () => {
  let component: BusinesspopupComponent;
  let fixture: ComponentFixture<BusinesspopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesspopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
