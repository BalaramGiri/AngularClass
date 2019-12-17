import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommentsService } from '../Services/comments.service';
import { IComments } from '../Services/iCommnets'
import { Subscription, Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit, OnDestroy {

  commentsList: IComments[] = [];
  subscription: Subscription;

  commentsList$: Observable<IComments[]>;
  errorMessage: string;
  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    //this.subscription = this.commentsService.getComments().subscribe((data) => this.commentsList = data);
    this.commentsList$ = this.commentsService.comments$.pipe(catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    }
    ));

  }

  ngOnDestroy() {
    // console.log('in Unsubscription');
    // if (this.subscription){
    //      this.subscription.unsubscribe();
    //}



  }
}




