import { Component } from '@angular/core';
import { name } from './JSModule';
import { IMovie } from './movie/service/iMovie';
//import { MovieService } from './movie/service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  //template: '<h1>Hello World!</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieapp';
  name = 'Movie App';
  hidden = false;

  //constructor(private movieService: MovieService){
    constructor(){

  }

  // movieList: IMovie[] = [
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

  toggle() {
    this.hidden = !this.hidden;
  }

  trackBy(i:number,item:IMovie){
  //  console.log(item);
    
     return i;
  }

  // addMovie()
  // {
  //   this.movieService.addMovies();
  // }

}
