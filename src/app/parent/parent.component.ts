import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() {}
  tasks:any = [];
  
  addTask(newTask:any) {
    this.tasks = newTask;
    console.log(this.tasks);
  }

  ngOnInit(): void {
  }
}
