import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { ITodo } from './service/ITodo'
import { Subscription, Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todosList: ITodo[] = [];
  subscription: Subscription;

  todosList$: Observable<ITodo[]>;
  errorMessage: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //this.subscription = this.commentsService.getComments().subscribe((data) => this.commentsList = data);
    this.todosList$ = this.todoService.todos$.pipe(catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    }

    

    ));

  }
}
