import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieAddFormComponent } from './movie-add-form/movie-add-form.component';
import { MovieArrayComponent } from './movie-array/movie-array.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    MovieAddComponent,
    MovieAddFormComponent,
    MovieArrayComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
