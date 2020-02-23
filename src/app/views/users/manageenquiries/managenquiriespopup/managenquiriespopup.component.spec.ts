import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagenquiriespopupComponent } from './managenquiriespopup.component';

describe('ManagenquiriespopupComponent', () => {
  let component: ManagenquiriespopupComponent;
  let fixture: ComponentFixture<ManagenquiriespopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagenquiriespopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagenquiriespopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
