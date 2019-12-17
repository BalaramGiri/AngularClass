import { Injectable } from '@angular/core';
import { IMovie } from './iMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieList: IMovie[] = [
    {
      name: 'Rombo', language: 'English', rating: 3, releaseDate: new Date('10/22/1995')
    },
    {
      name: 'Sholay', language: 'Hindi', rating: 5, releaseDate: new Date('10/20/1975')
    },
    {
      name: 'AAA', language: 'Telugu', rating: 3, releaseDate: new Date('10/18/1985')
    }
  ];


  constructor() { }

  getMovies(){

     return this.movieList;
  }
  addMovies(){
    let movie = { name: 'ServMovie', language: 'Tamil', rating: 4, releaseDate: new Date('11/03/1995')}
   // this.movieList.push(movie);
    //this.movieList.concat(movie);
    return this.movieList = [...this.movieList,movie];  //spread operator

  }

}
