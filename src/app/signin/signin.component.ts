// Import necessary modules and services
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  // Declare properties for form inputs
  email: string = '';
  password: string = '';

  // Inject the AuthService and Router in the constructor
  constructor(private authService: AuthService, private router: Router) {}

  // Function to handle sign-in
  signIn() {
    // Check if the required fields are not empty
    if (!this.email || !this.password) {
      console.error('Please fill in all the required fields.');
      return;
    }

    // Prepare credentials object
    const credentials = {
      email: this.email,
      password: this.password,
    };

    // Call the sign-in method from the AuthService
    this.authService.signin(credentials).subscribe(
      (response) => {
        console.log('Sign-in successful:', response);

        // After successful sign-in, navigate to the home page or any other route
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Sign-in failed:', error);

        // Handle the error, e.g., display an error message to the user
      }
    );
  }
}
