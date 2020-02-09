import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsTableGroupComponent } from './tags-table-group.component';

describe('TagsTableGroupComponent', () => {
  let component: TagsTableGroupComponent;
  let fixture: ComponentFixture<TagsTableGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsTableGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsTableGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
