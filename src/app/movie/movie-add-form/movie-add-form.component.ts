import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../CustomValidations/CustomValidations';

@Component({
  selector: 'app-movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.css']
})
export class MovieAddFormComponent implements OnInit {

  movieForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.movieForm = this.fb.group({
      movieName: new FormControl({ value: 'Joker', disabled: false },
        { updateOn: 'blur', validators: [Validators.required, CustomValidator.nameValidator] }),
      movieReleaseDate: new FormControl('02/10/1999'),
      movieLanguage: new FormControl('Hindi', [Validators.required, CustomValidator.specialCharValidator('$')]),
      movieRating: new FormControl('4'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      //  },{updateOn: 'blur', validators: CustomValidator.passwordValidator}
    }, { updateOn: 'submit', validators: CustomValidator.passwordValidator }
    );
    this.bindData();
  }

  bindData() {
    //this.movieForm.setValue({
    this.movieForm.patchValue({
      movieName: 'LionKing',
      movieReleaseDate: '11/21/2019',
      // movieLanguage : 'English',
      movieRating: '4'
    })
  }

  addMovie() {
    console.log(this.movieForm.value);
    console.log(this.movieForm.getRawValue());
  }



}
