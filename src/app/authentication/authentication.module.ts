import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthrouteModule } from './authroute/authroute.module';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthrouteModule
  ]
})
export class AuthenticationModule { 
  constructor(){
    console.log("auth module loaded...");
    
  }
}
