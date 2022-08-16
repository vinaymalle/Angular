import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  result: boolean = false;
  inputValue: String = "Vinay Mallela";
  users = ['vinay', 'praveen', 'shiva'];
  userInfo: any = {
    name: "vinay",
    city: "hyderabad",
    pincode: '12345',
  }
  authentication: boolean = true;
  visited: String = 'mumbai';
  visitedCities = [
    'hyd',
    'mumbai',
    'bng',
    'kolkatta',
    'chennai'
  ]
  constructor() { 
    // for(let i = 0; i < this.users.length; i++){
    //   console.log(this.users[i]);
      
    // }
    // for(let element of this.users){
    //   console.log(element);
      
    // }
    // for(let item in this.userInfo){
    //   console.log(item, this.userInfo[item]);
      
    // }
  }
  
  ngOnInit(): void {
  }
  change(){
    console.log(this.inputValue);
    
    if(this.result){
      this.result = false;
    }else{
      this.result = true;
    }
  }
}
