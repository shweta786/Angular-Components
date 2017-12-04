import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public title = "dropdown title";
  public action = [
    { name: 'action one' },
    { name: 'action two' },
    { name: 'action three' },
    { name: 'action four' }
  ];
  
}
