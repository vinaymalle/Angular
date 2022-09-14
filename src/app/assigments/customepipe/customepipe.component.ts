import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customepipe',
  templateUrl: './customepipe.component.html',
  styleUrls: ['./customepipe.component.css']
})
export class CustomepipeComponent implements OnInit {
  userinfo :any = [
    {
      name : "sasi",
      city : "hyd"
    },
    {
      name : "raja",
      city : "hyd"
    },
    {
      name : "aaryan",
      city : "hyd"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
