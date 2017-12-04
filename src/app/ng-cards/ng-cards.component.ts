import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-cards',
  templateUrl: './ng-cards.component.html',
  styleUrls: ['./ng-cards.component.css']
})
export class NgCardsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  @Input() public title = '';
  @Input() public text = '';
  @Input() public linkName = '';  
  @Input() public link = '';  
}
