import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap.subscribe(data=>this.id =+ data.get('id'))
      
  }

}
