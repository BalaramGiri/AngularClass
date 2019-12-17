import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [PostsComponent, PostListComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ]
})
export class PostsModule { }
