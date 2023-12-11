import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {
    this.email = '';
    this.password = '';
  }

  
  signup() {
    this.authService.signup(this.email, this.password).then(
      (response: any) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/signin']); // navigate to home page on successful signup
        window.alert('Signup successful!');
      },
      (error: any) => {
        console.error('Signup failed:', error);
      }
    );
  }
 
}
