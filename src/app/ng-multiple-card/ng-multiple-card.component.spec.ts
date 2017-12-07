import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMultipleCardComponent } from './ng-multiple-card.component';

describe('NgMultipleCardComponent', () => {
  let component: NgMultipleCardComponent;
  let fixture: ComponentFixture<NgMultipleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMultipleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMultipleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
