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
  public ac1 = "action one";
  public ac2 = "action two";
  public ac3 = "action three";
  
}
