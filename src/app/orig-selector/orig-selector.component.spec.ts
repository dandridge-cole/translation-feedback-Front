import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigSelectorComponent } from './orig-selector.component';

describe('OrigSelectorComponent', () => {
  let component: OrigSelectorComponent;
  let fixture: ComponentFixture<OrigSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
