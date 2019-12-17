import { Component, OnInit,Input,Output,EventEmitter,ChangeDetectionStrategy,OnChanges, SimpleChanges} from '@angular/core';
import {IMovie} from '../service/iMovie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit,OnChanges {
  
  @Input() movies : IMovie[]=[];
  @Output() currentMovie = new EventEmitter<IMovie>();
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
  }
  
  selectedMovie(movie : IMovie){
    this.currentMovie.emit(movie);

  }



}
