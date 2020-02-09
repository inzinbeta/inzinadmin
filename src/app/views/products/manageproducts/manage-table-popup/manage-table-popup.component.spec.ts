import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTablePopupComponent } from './manage-table-popup.component';

describe('ManageTablePopupComponent', () => {
  let component: ManageTablePopupComponent;
  let fixture: ComponentFixture<ManageTablePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTablePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
