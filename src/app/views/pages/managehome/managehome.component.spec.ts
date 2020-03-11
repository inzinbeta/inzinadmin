import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehomeComponent } from './managehome.component';

describe('ManagehomeComponent', () => {
  let component: ManagehomeComponent;
  let fixture: ComponentFixture<ManagehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
