import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username:[""],
      email: [""],
      password: [""]
    })
  }
  signUp() {
    this.http.post<any>("https://user-auth-nodejs.onrender.com/users/register", this.signUpForm.value)
      .subscribe(res => {
        console.log('signup SUCCESFUL');
        this.signUpForm.reset()
        this.router.navigate(["login"])
      }, err => {
        console.log("Something went wrong")
      })
  }
}
