import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { ThemeService } from '../theme.service';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { NotificationService } from '../notification.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 
  notificationCount: number = 0;
  private notificationSub: Subscription | undefined;


  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  get currentUser() {
    return this.authService.currentUser;
  }


  constructor(
    private backEndService:BackEndService, 
    private postservice: PostService, 
    private route: ActivatedRoute,
    private themeService: ThemeService,
    private authService: AuthService,
    private notificationService: NotificationService
    ) { }

  
  ngOnInit(): void {
    this.notificationSub = this.notificationService.notificationCount.subscribe(
      (count: number) => {
        console.log('Notification count:', count);
        this.notificationCount = count;
      }
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkThemeEnabled();

  }

  signout() { // Add this method
    this.authService.signout();

  // onSave() {
  //   this.backEndService.saveData();
  // }
  // onFetch() {
  //   this.backEndService.fetchData();
  // }

}

ngOnDestroy() {
  if (this.notificationSub) {
    this.notificationSub.unsubscribe();
  }
}
}