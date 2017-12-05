import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-alerts',
  templateUrl: './ng-alerts.component.html',
  styleUrls: ['./ng-alerts.component.css']
})

export class NgAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public title = '';
  @Input() public text = '';
  
}
