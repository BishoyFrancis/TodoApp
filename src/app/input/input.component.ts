import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() task_value = new EventEmitter<string>();
  flag:boolean = false;
  constructor() {}
  value:any = [];
  
  getTask(task:string) {
    if(task!= ''){
      console.log(task)
      this.value.push(task);
      this.task_value.emit(this.value);
      
    }
      else{alert("Please Enter a Task")}
  }

  ngOnInit(): void {
  }

}
