import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerpopupComponent } from './bannerpopup.component';

describe('BannerpopupComponent', () => {
  let component: BannerpopupComponent;
  let fixture: ComponentFixture<BannerpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
