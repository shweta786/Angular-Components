import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ng-dropdown',
  templateUrl: './ng-dropdown.component.html',
  styleUrls: ['./ng-dropdown.component.css']
})
export class NgDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public title= '';
  @Input() public ac1= '';
  @Input() public ac2= '';
  @Input() public ac3= '';
}
