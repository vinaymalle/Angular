import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName: String = 'vinay';
  @ViewChild('parent') parent: ElementRef<HTMLElement> | undefined
  @ViewChild('child') sampleChild: ElementRef<HTMLElement> | undefined
  constructor() { }

  ngOnInit(): void {
    // fetch('https://jsonplaceholder.typicode.com/users').then((result) => {
    //    console.log(result.json());
    // }).catch((error)=>{
    //   console.log(error, 'this is catch block...');
      
    // })
  //  let value =  this.recieveData()
    // users(){
    //   //logic..
    //   throw error;
    //   return promises;
    // }

  }
  recieveData(event:any){
    console.log(event, "recieved data from child...");
    // return 'vina'
  }
  accessElem(){
    //window
    // window.document.getElementById
    
    // console.log(document.getElementById('fstdiv')?.innerHTML);
    if(this.parent){
      this.parent.nativeElement.style.color = 'red';
    }
    if(this.sampleChild){
      this.sampleChild.nativeElement.className = 'sample'
    }
    
  }
}
