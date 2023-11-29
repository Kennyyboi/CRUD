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


const routes : Routes= [
  {path: '', redirectTo: 'post-list', pathMatch: 'full'},
  {path: 'post-list', component: PostListComponent},
  {path: 'post-add', component: PostEditComponent},
  {path: 'authentication', component: AuthComponent},
  { path: 'post-edit/:index', component: PostEditComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PostComponent,
    PostEditComponent,
    PostListComponent,
    HeaderComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
