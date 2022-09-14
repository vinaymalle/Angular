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
      name : "sasi",
      city : "hyd"
    },
    {
      name : "sasi",
      city : "hyd"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
