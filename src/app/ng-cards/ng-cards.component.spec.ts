import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCardsComponent } from './ng-cards.component';

describe('NgCardsComponent', () => {
  let component: NgCardsComponent;
  let fixture: ComponentFixture<NgCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
