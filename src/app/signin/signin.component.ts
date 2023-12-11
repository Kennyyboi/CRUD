import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 
import { Observable, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string;
  password: string;
  
  constructor(private authService: AuthService, private router: Router) {
    this.email = '';
    this.password = '';
}

signIn(email: string, password: string) {
  this.authService.signIn(email, password)
    .pipe(
      tap((user: any) => {
        console.log('User signed in:', user);
        // Navigate to a different page if sign in is successful
        this.router.navigate(['/post-list']);
      }),
      catchError((error: any) => {
        console.error('Sign in failed:', error);
        // Handle sign in failure (e.g., show an error message to the user)
        throw error;
      })
    )
    .subscribe();
}
}
