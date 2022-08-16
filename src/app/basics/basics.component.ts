import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
//interpolation
//binding
export class BasicsComponent implements OnInit {
  email: String = "vinay@gmail.com";
  mobile: number = 12346578;
  sampleName: String = 'city';
  dynamicClass = 'color';
  dynamicStyle = 'font-weight: bold'
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    console.log("save called...");
  }
}
