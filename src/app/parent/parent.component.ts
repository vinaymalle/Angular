import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName: String = 'vinay';
  constructor() { }

  ngOnInit(): void {
  }
  recieveData(event:any){
    console.log(event, "recieved data from child...");
    
  }

}
