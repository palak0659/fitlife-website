import { Component, OnInit } from '@angular/core';
declare var name: any;
@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})


export class BmiComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    new name();
  }

}
