import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-card-child',
  templateUrl: './ng-card-child.component.html',
  styleUrls: ['./ng-card-child.component.css']
})
export class NgCardChildComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  @Input() title: string;
  @Input() hidden: boolean = false;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;
  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  isDisabled: boolean = true;

  get isActive(): boolean {
    return this._isActive;
  }

}
