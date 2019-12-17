import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';


const routes: Routes = [
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'comments/:id',
    component:CommentsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }



