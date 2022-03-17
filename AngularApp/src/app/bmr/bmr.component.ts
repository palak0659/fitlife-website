import { Component, OnInit } from '@angular/core';
declare var handleBmrCalculatorSubmit: any;

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new handleBmrCalculatorSubmit();


  }

}
