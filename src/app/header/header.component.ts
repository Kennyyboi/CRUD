import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { ThemeService } from '../theme.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private backEndService:BackEndService, 
    private postservice: PostService, 
    private route: ActivatedRoute,
    private themeService: ThemeService
    ) { }

  
  ngOnInit(): void {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkThemeEnabled();

  // onSave() {
  //   this.backEndService.saveData();
  // }
  // onFetch() {
  //   this.backEndService.fetchData();
  // }

}
}