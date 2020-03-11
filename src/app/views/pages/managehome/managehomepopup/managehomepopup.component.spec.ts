import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehomepopupComponent } from './managehomepopup.component';

describe('ManagehomepopupComponent', () => {
  let component: ManagehomepopupComponent;
  let fixture: ComponentFixture<ManagehomepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagehomepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehomepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
