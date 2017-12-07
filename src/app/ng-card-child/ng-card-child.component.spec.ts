import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCardChildComponent } from './ng-card-child.component';

describe('NgCardChildComponent', () => {
  let component: NgCardChildComponent;
  let fixture: ComponentFixture<NgCardChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCardChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
