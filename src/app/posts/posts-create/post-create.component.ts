import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {

  constructor(private postsService: PostsService) {}

  ngOnInit() { }

  onAddPost(form: NgForm) {
    if (!form.invalid) {
      // this.postCreated.emit(post);
      this.postsService.addPost(form.value.title, form.value.content);
    }
    form.resetForm();
  }
}
