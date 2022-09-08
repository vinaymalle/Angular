import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchcomponent',
  templateUrl: './fetchcomponent.component.html',
  styleUrls: ['./fetchcomponent.component.css']
})
export class FetchcomponentComponent implements OnInit {
  public sampleData:any;
  constructor() { }

  ngOnInit(): void {
   
    // fetch("https://jsonplaceholder.typicode.com/posts").then((result:any)=>{
    //   // console.log(result.json());
    //   this.sampleData = result.json();
    //   console.log(this.sampleData);
      
    // }).catch((error:any)=>{
    //     console.log(error);
    // });

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.sampleData =data;
    })
    .catch((error:any)=>{
      console.log(error);
    });
  }

}
