import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  doneList: Array<Task> = [];
  constructor(private todoService: TodoService) {
    todoService.getTasksList().subscribe((tasks: Array<Task>) => {
      this.doneList = tasks.filter(e => e.isDone === true);
    });
   }

  ngOnInit() {
  }

}
