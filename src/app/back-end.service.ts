import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post-model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) { 
    this.fetchData();
   }

  saveData() {
    const listOfPosts: Post[] = this.postService.getPost();
    this.http.put(
        'https://cc105finals-default-rtdb.asia-southeast1.firebasedatabase.app/post.json',
      listOfPosts)
      .subscribe((res) => {
        console.log(res)
      })
  }
  fetchData() {
    return this.http.get<Post[]>(
      'https://cc105finals-default-rtdb.asia-southeast1.firebasedatabase.app/post.json')
      .pipe (tap((listOfPosts: Post[]) => {
        console.log(listOfPosts)

        listOfPosts.forEach(post => {
            if (!Array.isArray(post.comments)){
                post.comments = [];
            }
        })
        this.postService.setPosts(listOfPosts);
        this.postService.listChangedEvent.emit(listOfPosts);
      })).subscribe();
  }
}