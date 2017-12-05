import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-buttons',
  templateUrl: './ng-buttons.component.html',
  styleUrls: ['./ng-buttons.component.css']
})
export class NgButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public name1 = '';
  @Input() public name2 = '';
  @Input() public name3 = '';

}
