import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-card',
  templateUrl: './multiple-card.component.html',
  styleUrls: ['./multiple-card.component.css']
})
export class MultipleCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public title1 = "Alert title";
  public text1 = "This is an exaple of alert inside wizard";
  public name1 = "Button1";
  public name2 = "Button2";
  public name3 = "Button3";
  public title2 = "Dropdown's title";
  public action = [
    { name: 'action one' },
    { name: 'action two' },
    { name: 'action three' },
    { name: 'action four' }
  ];
  
}
