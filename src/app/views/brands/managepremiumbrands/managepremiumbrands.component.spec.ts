import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepremiumbrandsComponent } from './managepremiumbrands.component';

describe('ManagepremiumbrandsComponent', () => {
  let component: ManagepremiumbrandsComponent;
  let fixture: ComponentFixture<ManagepremiumbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepremiumbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepremiumbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
