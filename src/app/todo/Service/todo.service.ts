import { Injectable } from '@angular/core';
import { ITodo } from './iTodo';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  

  constructor(private http: HttpClient) {   //dependency injection
  }

  todos$ = this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
    shareReplay(1)
  )

  addToDo(iTodo: ITodo) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', iTodo);
  }

}
