// signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signUp(username: string, email: string, password: string) {
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    
    this.authService.signup(userData).subscribe(
      (response) => {
        console.log('Sign-up successful:', response);
        this.router.navigate(['/signin']);
      },
      (error) => {
        console.error('Sign-up failed:', error);
      }
    );
  }
}