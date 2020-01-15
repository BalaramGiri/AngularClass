import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './service/todo.service';
import { todoServiceFactory } from './service/todo.service.provider';
import { LoginService } from '../login/Service/login-service.service';
import { APP_SERVICE } from '../valueprovider/appconfig.service';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoDetailsComponent, TodoAddComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide : TodoService, useFactory : todoServiceFactory, deps: [LoginService, APP_SERVICE,HttpClient] }
  ]
})
export class TodoModule { }
