import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // common functions and variables
  // Backend or server and Http api calls
  constructor() { }
  userData = {
    name: 'naveen',
    clg: 'jntu'
  }
  getTodayDate(){
    let date = new Date();
    //logic...
    return date;
  }
}
