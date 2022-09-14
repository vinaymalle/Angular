import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cutomepipe',
  templateUrl: './cutomepipe.component.html',
  styleUrls: ['./cutomepipe.component.css']
})
export class CutomepipeComponent implements OnInit {
  userInfo = [
    {
      name: "vinay",
      city: "hyd",
      id: 1
    },
    {
      name: "kalyan",
      city: "mumbai", 
      id: 2
    },
    {
      name: "ravi",
      city: "chennai",
      id: 3
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
