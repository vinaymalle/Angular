import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // common functions and variables
  // Backend or server and Http api calls
  constructor(private http: HttpClient) { }
  userData = {
    name: 'naveen',
    clg: 'jntu'
  }
  getTodayDate(){
    let date = new Date();
    //logic...
    return date;
  }
  getUsers(){
    // this.http.
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
