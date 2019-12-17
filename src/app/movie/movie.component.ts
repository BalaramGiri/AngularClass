import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, QueryList ,
    DoCheck,Self,SkipSelf,Optional} from '@angular/core';
import { IMovie } from './service/iMovie';
import { HeaderComponent } from '../header/header.component';
import { MovieService } from './service/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
  //,providers:[MovieService]
})
export class MovieComponent implements OnInit, AfterViewInit,DoCheck {
  // @ViewChild(HeaderComponent, { static: true }) headerComponent: HeaderComponent;
  // @ViewChildren(HeaderComponent) headerViewChildrenComponent: QueryList<HeaderComponent>;
  movieList: IMovie[];
  
  //=
  // [
  //   {
  //     name: 'Rombo', language: 'English', rating: 3, releaseDate: new Date('10/22/1995')
  //   },
  //   {
  //     name: 'Sholay', language: 'Hindi', rating: 5, releaseDate: new Date('10/20/1975')
  //   },
  //   {
  //     name: 'AAA', language: 'Telugu', rating: 3, releaseDate: new Date('10/18/1985')
  //   }
  // ];

  constructor(@SkipSelf() private movieService:MovieService) { }

  ngOnInit() {
    // this.headerComponent.title = 'MovieList';
    // console.log(this.headerViewChildrenComponent);

    this.movieList = this.movieService.getMovies();
  }

  ngDoCheck(){
    console.log('Do Check...');  //Try to avoid Do check because its very expensive
  }

  ngAfterViewInit() {
    // console.log(this.headerViewChildrenComponent);
    // this.headerViewChildrenComponent.forEach(header=>header.title = 'New Title') ;
  }

  getFromChild(movie: IMovie) {
    console.log(movie);
  }

  addMovie()
  {
    this.movieList = this.movieService.addMovies();
  }




}
