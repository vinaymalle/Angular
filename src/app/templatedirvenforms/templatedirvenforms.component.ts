import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedirvenforms',
  templateUrl: './templatedirvenforms.component.html',
  styleUrls: ['./templatedirvenforms.component.css']
})
export class TemplatedirvenformsComponent implements OnInit {
  userName: String = '';
  position: String = 'developer';
  userEmail: String = '';
  userGender: String = 'male';
  Condition: boolean = false
  Cars: any = {
    name: 'Tata',
    Milage: '20Km',
    Price: '7 Lakhs',
    Year: '2020'
  }
  constructor() { }

  ngOnInit(): void {
  }
  showData(form: NgForm){
    console.log(form.value);
    
  }
}
