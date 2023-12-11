import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signIn(email: string, password: string) {
    return from(firebase.auth().signInWithEmailAndPassword(email, password));
  }
  constructor( private afAuth: AngularFireAuth ) {}

  signup(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log('User signed up:', user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error('Error signing up:', errorCode, errorMessage);
      });
  }

}
