import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  onStepChanged: EventEmitter<NgCardChildComponent> = new EventEmitter<NgCardChildComponent>();

  @ContentChildren(NgCardChildComponent) cardSteps: QueryList<NgCardChildComponent>;
  private _steps: Array<NgCardChildComponent>= [];

  ngAfterContentInit() {
    this.cardSteps.forEach(step => this._steps.push(step));
    this.steps[0].isActive = true;
  }

  //getter method of _steps array, filtering step which is not hidden
  get steps(): Array<NgCardChildComponent> {              
    return this._steps.filter(step => !step.hidden);
  }

  get activeStep(): NgCardChildComponent {
    return this.steps.find(step => step.isActive);
  }

  set activeStep(step: NgCardChildComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  public next(): void {
    if (this.hasNextStep) {
      let nextStep: NgCardChildComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      let prevStep: NgCardChildComponent = this.steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
    }
  }

}
