import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private router: Router) {
    console.log("constructor executed...");
    
  }
  navigate(){
    this.router.navigateByUrl('/basic')
  }
  ngAfterViewInit(): void {
    //after initializ
    console.log("viewinit executed...");
  }
  ngOnDestroy(): void {
    console.log("ondestroy executed...");
  }

  ngOnInit(): void {
    //component initialized...
    console.log("oninit executed...");
  }
 
}
