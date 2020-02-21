import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuserspopupComponent } from './manageuserspopup.component';

describe('ManageuserspopupComponent', () => {
  let component: ManageuserspopupComponent;
  let fixture: ComponentFixture<ManageuserspopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageuserspopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuserspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
