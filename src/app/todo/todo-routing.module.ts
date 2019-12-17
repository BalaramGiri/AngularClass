import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoAddComponent } from './todo-add/todo-add.component';


const routes: Routes = [
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'todos/:id',
    component:TodoDetailsComponent

  },
  { 
    path: 'addTodos',
    component:TodoAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
