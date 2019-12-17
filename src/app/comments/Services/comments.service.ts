import { Injectable } from '@angular/core';
import { IComments } from './iCommnets';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  comments$ = this.http.get<IComments[]>('https://jsonplaceholder.typicode.com/comments').pipe(
    shareReplay(1)
  )

  constructor(private http:HttpClient) {   //dependency injection
  }

// getComments(){
//   return this.http.get<IComments[]>('https://jsonplaceholder.typicode.com/comments');
// }

}


