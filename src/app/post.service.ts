import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post-model";
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class PostService {
  postService: any;

  constructor(private http: HttpClient){

  }
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [

    //   new Post("TechCrunch",
    //     "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage-1024x542.webp",
    //     "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.",
    //     "Ken",
    //     new Date,
    //     1
    //   ),
    //   new Post("Engadget",
    //     "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/the-verge-website-homepage.webp",
    //     "The Verge’s website homepage is vibrant – a black and white theme with bright accents of orange and magenta.",
    //     "Ken",
    //     new Date,
    //     1
    //   ),
      
  ];
  getPost() {
    return this.listOfPosts;
  }
  deleteButton(index: number) {
    this.listOfPosts.splice(index, 1)
    this.saveData(); 
  }
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
    this.saveData();
  }
  getSpecPost(index: number) {
    return this.listOfPosts[index];
  }
  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes++;
    this.saveData();
  }
  addComment(index: number, comment: string) {
    this.listOfPosts[index].comments.push(comment);
    this.saveData();
  }
  getComments(index: number) {
    return this.listOfPosts[index].comments;
  }
  setPosts(listOfPosts: Post[]) {
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }


  saveData() {
    this.http.put('https://cc105-back-end-default-rtdb.asia-southeast1.firebasedatabase.app/post.json', 
    this.listOfPosts)
    .subscribe((res) => {
     console.log(res);
    });
}

fetchData() {
    this.http.get<Post[]>('https://cc105-back-end-default-rtdb.asia-southeast1.firebasedatabase.app/post.json')
    .subscribe((listofPosts: Post[]) => {
     console.log(listofPosts)
     this.setPosts(listofPosts);
    });
}
}
