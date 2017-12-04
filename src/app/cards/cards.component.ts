import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  public title = "Simple Card";
  public text = "Any text can be placed here";
  public linkName = "Go somewhere";
  public link = "#";

}
