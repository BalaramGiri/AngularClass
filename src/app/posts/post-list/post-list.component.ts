import { Component, OnInit,Input} from '@angular/core';
import { IPost } from '../Services/iPost';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() posts : IPost[]=[];
  ngOnInit() {
  }

}
