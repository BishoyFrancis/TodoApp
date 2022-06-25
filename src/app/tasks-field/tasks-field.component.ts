import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasks-field',
  templateUrl: './tasks-field.component.html',
  styleUrls: ['./tasks-field.component.scss']
})
export class TasksFieldComponent implements OnInit {

  @Input() items:any;


  constructor() {}
  ngOnInit(): void {
  }

  TaskDone(idx:number){
    let task = document.getElementById(`task#${idx}`);
    task?.classList.add('done')
    console.log(task)
  }

  TaskDelete(idx:number){
    let task = document.getElementById(`task#${idx}`);
    task?.remove();
  }

}
