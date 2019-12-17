import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IPost } from './iPost';

@Injectable({
  providedIn: 'root'
})


export class PostsService {
  constructor(private http:HttpClient) { 
  }

getpost(){

  return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
}

}
