import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-reatvi-forms',
  templateUrl: './reatvi-forms.component.html',
  styleUrls: ['./reatvi-forms.component.css']
})
export class ReatviFormsComponent implements OnInit {
  // name: string = "vinay"
  userForm: FormGroup = new FormGroup({
    userName: new FormControl('vinay', [Validators.required, Validators.maxLength(6)]),
    password: new FormControl('2352342', Validators.required),
    gender: new FormGroup({
      city: new FormControl(),
      genderValue: new FormControl()
    })
  })

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    // let value = this.save()
  }
  save(){
    console.log(this.userForm);
    // let newDate = this.service.getTodayDate();
    console.log(this.service.getTodayDate());
    // let userinfo = this.service.userData;
    console.log(this.service.userData);
    
    // let sample = 123;
    // console.log(sample);
    
    // return true
  }
  
}
