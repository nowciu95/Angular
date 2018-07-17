import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: String;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }

  add() {
    const task: Task = ({name: this.newTask, created: new Date()});
    this.todoService.add(task);
    this.newTask = '';
  }

}
