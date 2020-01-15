import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { AuthGuard } from '../guards/auth.guard';
import { TodoGuard } from './guards/todo.guard';


const routes: Routes = [
  {
    path: 'todos',
    component: TodoComponent,
    canActivate:[AuthGuard],canActivateChild:[AuthGuard],
    resolve:{
      todoList: TodoGuard
    },
    children:[{
      path: ':id',
      component:TodoDetailsComponent
    }]
  },
  // {
  //   path: 'todos/:id',
  //   component:TodoDetailsComponent

  // },
  { 
    path: 'addTodos',
    component:TodoAddComponent,
    canDeactivate:[TodoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
