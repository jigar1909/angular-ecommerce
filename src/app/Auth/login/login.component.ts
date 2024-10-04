import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

  }
  login() {
    this.http.post<any>("https://user-auth-nodejs.onrender.com/users/login", this.loginForm.value)
      .subscribe(res => {
        console.log('Login response:', res);
    
        if (res) {
            localStorage.setItem('token', res.token); 
           // Save token to localStorage
          this.loginForm.reset();
          this.router.navigate([""]); // Navigate to home or dashboard after login
        } else {
          console.log("User not found or incorrect password");
        }
      }, err => {
        console.error("Something went wrong during login:", err);
        console.log("Login failed. Please try again.");
      });
  }  
  
}
