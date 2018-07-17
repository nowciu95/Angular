import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {

  taskList: Array<Task> = [];
  constructor(private todoService: TodoService) {
    todoService.getTasksList().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks;
    });
   }

  ngOnInit() {
  }

  delete(task: Task) {
    this.todoService.delete(task);
  }

  done(task: Task) {
    task.done = new Date();
    this.todoService.done(task);
  }

}
