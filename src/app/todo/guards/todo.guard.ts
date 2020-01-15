import { Injectable } from '@angular/core';
import { Resolve, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../service/iTodo';
import { TodoService } from '../service/todo.service';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Injectable({
  providedIn: 'root'
})
export class TodoGuard implements CanDeactivate<TodoAddComponent>, Resolve<ITodo[]> {

  constructor(private todoService: TodoService) { }

  canDeactivate(component: TodoAddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.todoForm.pristine;
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> {
    return this.todoService.todos$;
  }


}
