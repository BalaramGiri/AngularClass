import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../Service/iTodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

    @Input() todos : ITodo[]=[];
    ngOnInit() {
    }
}
