import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraymethods',
  templateUrl: './arraymethods.component.html',
  styleUrls: ['./arraymethods.component.css']
})
export class ArraymethodsComponent implements OnInit {
  userInfo: any = {
    name: 'vinay',
    college: 'Malla reddy college...'
  }
  users = [
    'naveen',
    'Raghu',
    'Anitha',
    'Priya'
  ]
  constructor() { }

  ngOnInit(): void {
  }
  addObject(){
    this.userInfo.city = 'hyderabad';
    this.userInfo.name = 'sasi';
    console.log(this.userInfo);
    
  }
  deleteObject(){
    delete this.userInfo.college;
    console.log(this.userInfo);
    
  }
  addArray(){
    // this.users[4] = 'vinay';
    // this.users.push('vinay');
    this.users.unshift('sasi');
    console.log(this.users);
    
  }
  deleteArray(){
    // this.users.pop();
    this.users.shift();
    console.log(this.users);
    
  }
}
