
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('token'); // Check if user is logged in
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false;
    }
    return true; // Allow access if logged in
  }
}
