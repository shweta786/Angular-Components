import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAlertsComponent } from './ng-alerts.component';

describe('NgAlertsComponent', () => {
  let component: NgAlertsComponent;
  let fixture: ComponentFixture<NgAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
