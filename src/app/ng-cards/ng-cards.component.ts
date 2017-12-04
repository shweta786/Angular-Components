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

  @Input() public title2 = '';
  @Input() public text2 = '';
  @Input() public linkName20 = '';  
  @Input() public link20 = '';  
  @Input() public linkName21 = '';  
  @Input() public link21 = '';  
  @Input() public subtitle = '';

}
