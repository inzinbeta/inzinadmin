import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebrandsTablePopupComponent } from './managebrands-table-popup.component';

describe('ManagebrandsTablePopupComponent', () => {
  let component: ManagebrandsTablePopupComponent;
  let fixture: ComponentFixture<ManagebrandsTablePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebrandsTablePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebrandsTablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
