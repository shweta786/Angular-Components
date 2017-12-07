import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { NgCardChildComponent } from '../ng-card-child/ng-card-child.component';
@Component({
  selector: 'app-ng-multiple-card',
  templateUrl: './ng-multiple-card.component.html',
  styleUrls: ['./ng-multiple-card.component.css']
})
export class NgMultipleCardComponent implements AfterContentInit {

  constructor() { }
  ngOnInit() {
  }

  @ContentChildren(NgCardChildComponent) cardSteps: QueryList<NgCardChildComponent>;
  private _steps: Array<NgCardChildComponent>= [];
  private steps: Array<NgCardChildComponent>= [];

  ngAfterContentInit() {
    this.cardSteps.forEach(step => this._steps.push(step));
    this.steps[0].isActive = true;
  }

}
