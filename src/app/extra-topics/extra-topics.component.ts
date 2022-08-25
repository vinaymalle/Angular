import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extra-topics',
  templateUrl: './extra-topics.component.html',
  styleUrls: ['./extra-topics.component.css']
})
export class ExtraTopicsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // let val = new Object()
  }
  redirect(){
    this.router.navigateByUrl('hooks')
  }
}
