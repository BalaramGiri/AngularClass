import { Injectable, Inject } from '@angular/core';
import { ITodo } from './iTodo';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { APP_SERVICE } from '../../valueprovider/appconfig.service';
import { IAppConfig } from '../../valueprovider/appconfig';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  

  constructor(isAdmin: boolean,private http: HttpClient, @Inject(APP_SERVICE) private appService: IAppConfig ) {   //dependency injection
    console.log(isAdmin);
  }

  // todos$ = this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
  //   shareReplay(1)
  // )

    todos$ = this.http.get<ITodo[]>(`${this.appService.apiEndPoint}/todos`).pipe(
    shareReplay(1)
  )


  addToDo(iTodo: ITodo) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', iTodo);
  }

}
