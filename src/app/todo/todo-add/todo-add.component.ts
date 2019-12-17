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

  // bindData() {
  //   //this.movieForm.setValue({
  //   this.todoForm.patchValue({
  //     movieName: 'LionKing',
  //     movieReleaseDate: '11/21/2019',
  //     // movieLanguage : 'English',
  //     movieRating: '4'
  //   })
  // }

  // addMovie() {
  //   console.log(this.todoForm.value);
  //   console.log(this.todoForm.getRawValue());
  // }

  addToDo(){
     
    this.todoService.addToDo(this.todoForm.getRawValue()).subscribe((data) => console.log(data));

  }

}
