import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageenquiriesComponent } from './manageenquiries.component';

describe('ManageenquiriesComponent', () => {
  let component: ManageenquiriesComponent;
  let fixture: ComponentFixture<ManageenquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageenquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
