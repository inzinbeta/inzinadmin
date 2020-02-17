import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePremiumBrandsTablePopupComponent } from './managepremiumbrands-table-popup.component';

describe('CategoriesTablePopupComponent', () => {
  let component: ManagePremiumBrandsTablePopupComponent;
  let fixture: ComponentFixture<ManagePremiumBrandsTablePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePremiumBrandsTablePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePremiumBrandsTablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
