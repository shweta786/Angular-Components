import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgButtonsComponent } from './ng-buttons.component';

describe('NgButtonsComponent', () => {
  let component: NgButtonsComponent;
  let fixture: ComponentFixture<NgButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
