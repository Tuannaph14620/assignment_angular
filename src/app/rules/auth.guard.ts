import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  isAdmin = JSON.parse(localStorage.getItem("user") || '')
  
  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot
    ): boolean {

    if (this.isAdmin !== '') {
      return true
    }
    this.router.navigate(['/signin'])
    return false

  }
  

}
