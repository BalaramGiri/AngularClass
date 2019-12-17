import { Component, OnInit, Input } from '@angular/core';
import { IComments } from '../Services/iCommnets';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  constructor() { }

  @Input() comments : IComments[]=[];
  ngOnInit() {
  }

}
