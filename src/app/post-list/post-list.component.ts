import { Component, OnInit } from '@angular/core';
import {Post} from '../post-model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit{
  listofPosts: Post[]=[

  ];

  constructor(private PostService: PostService, private router: Router, private backEndService: BackEndService){}

  ngOnInit(): void {
      this.listofPosts=this.PostService.getPost();
      this.PostService.listChangedEvent.subscribe((posts: Post[]) => {
        this.listofPosts = posts;
      });
  }
}


