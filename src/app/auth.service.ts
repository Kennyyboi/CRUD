import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { from, tap } from 'rxjs';
import { Router } from '@angular/router'; 


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  currentUser: firebase.User | null = null;

  signIn(email: string, password: string) {
    return from(firebase.auth().signInWithEmailAndPassword(email, password))
    .pipe(
      tap((userCredential) => {
        this.isAuthenticated = true;
        this.currentUser = userCredential.user;
      })
    );
  }
  constructor( private afAuth: AngularFireAuth, private router: Router ) {}

  signup(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log('User signed up:', user);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
      });
  }

  async signout() { // Add this method
    await this.afAuth.signOut();
    this.router.navigate(['/signin']);
    this.isAuthenticated = false;
    this.currentUser = null;
  }

}
