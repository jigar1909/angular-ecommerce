import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token'); // Access localStorage only in the browser
    }
    return false; // If not in the browser, assume the user is not logged in
  }
  
  logout() {
    localStorage.removeItem('token'); // Remove token
    this.router.navigate(['/login']); // Redirect to login page
  }
}
