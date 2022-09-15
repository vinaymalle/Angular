import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionGuard implements Resolve<any> {
 resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   //logic

   console.log('logic executed....');
   
 }
  
}
