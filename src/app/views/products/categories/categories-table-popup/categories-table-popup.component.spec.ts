import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTablePopupComponent } from './categories-table-popup.component';

describe('CategoriesTablePopupComponent', () => {
  let component: CategoriesTablePopupComponent;
  let fixture: ComponentFixture<CategoriesTablePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesTablePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesTablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
