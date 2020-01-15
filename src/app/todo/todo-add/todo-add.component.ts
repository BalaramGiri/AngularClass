import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//mport { CustomValidator } from './CustomValidations/CustomValidations';
import {TodoService} from '../Service/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder,private todoService: TodoService) {

  }


  ngOnInit() {
    this.todoForm = this.fb.group({
      userid: new FormControl(''),
      id: new FormControl(''),
      title: new FormControl(''),
      completed: new FormControl('')
    }, 
    );
   // this.bindData();
  }

  addToDo(){
     
    this.todoService.addToDo(this.todoForm.getRawValue()).subscribe((data) => console.log(data));
    this.isSubmitted = true;
    this.todoForm.reset({
      userid: '',
      id : '',
      title: '',
      completed: ''
    })
  }

}
