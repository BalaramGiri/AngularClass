import { Component, OnInit } from '@angular/core';
import { PostsService } from './Services/posts.service';
import { IPost } from './Services/iPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList : IPost[]=[];
  constructor(private postService:PostsService) { }


  ngOnInit() {
   this.postService.getpost().subscribe((data)=>this.postList=data);
  }



}
