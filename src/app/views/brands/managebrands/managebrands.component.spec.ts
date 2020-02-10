import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebrandsComponent } from './managebrands.component';

describe('ManagebrandsComponent', () => {
  let component: ManagebrandsComponent;
  let fixture: ComponentFixture<ManagebrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
