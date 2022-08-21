import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  companyName = 'Julius66 India Pvt Limited';
  companyInfo = {
    name: 'julius',
    location: 'hyd'
  }
  value = 23.456;
  todayDate = new Date(); // new keyword will be used for creating new object;
  constructor() { }

  ngOnInit(): void {
  }

}
