import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post-model';
import { PostService } from '../post.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BackEndService } from '../back-end.service';
import { AuthService } from '../auth.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  index: number = 0;
  form!: FormGroup;
  editMode = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private backEndService: BackEndService,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    let title = '';
    let imgPath = '';
    let description = '';

    this.actRoute.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = +params['index']; // Convert to number
        const postSpec = this.postService.getSpecPost(this.index);
        title = postSpec.title;
        imgPath = postSpec.imgPath;
        description = postSpec.description;
        this.editMode = true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      imgPath: new FormControl(imgPath, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const imgPath = this.form.value.imgPath;
    const description = this.form.value.description;
    const author = this.authService.currentUser?.email || 'Anonymous';
    const post: Post = new Post(
      title,
      imgPath,
      description,
      author,
      new Date(),
      0
    );

    if (this.editMode) {
      this.postService.updatePost(this.index, post);
    } else {
      this.postService.addPost(post);
      this.backEndService.saveData();
      this.notificationService.showSuccess('Post created successfully!');
    }
    this.router.navigate(['post-list']);
  }


  }

