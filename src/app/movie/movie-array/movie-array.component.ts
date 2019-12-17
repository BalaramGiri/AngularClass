import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-movie-array',
  templateUrl: './movie-array.component.html',
  styleUrls: ['./movie-array.component.css']
})
export class MovieArrayComponent implements OnInit {
  movieArray: FormGroup;
  get movies() {
    return this.movieArray.get('movies') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.movieArray = this.fb.group({
      year: new FormControl('', Validators.required),
      movies: this.fb.array([
       this.buildForm()
      ])
    })
  }

  addNewMovie() {
    this.movies.push(this.buildForm())
  }


  private buildForm() {
    return this.fb.group({
      name: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)
    });
  }

  removeMovie(i){
      this.movies.removeAt(i);
  }


}
