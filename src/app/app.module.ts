import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin/signin.component';
// import { provideFirebaseApp, } from '@angular/fire/app';
import { AuthService } from './auth.service';
import{AngularFireModule} from '@angular/fire/compat';
import { initializeApp, getApps, getApp } from '@firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyANQM8QstfQ9JxeWNum0Y9Sg--uhxhEZ7A",
  authDomain: "cc105finals.firebaseapp.com",
  databaseURL: "https://cc105finals-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cc105finals",
  storageBucket: "cc105finals.appspot.com",
  messagingSenderId: "606922756440",
  appId: "1:606922756440:web:15db195614ab71678a552d",
  measurementId: "G-HG120TS4MM"
};

const routes : Routes= [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'post-list', component: PostListComponent},
  {path: 'post-add', component: PostEditComponent},
  {path: 'authentication', component: AuthComponent},
  { path: 'post-edit/:index', component: PostEditComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PostComponent,
    PostEditComponent,
    PostListComponent,
    HeaderComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }