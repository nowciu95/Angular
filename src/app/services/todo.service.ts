import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskListObs = new BehaviorSubject<Array<Task>>([]);
  constructor(private http: HttpService) {
    this.http.getTask().subscribe((tasks: Array<Task>) => {
      this.taskListObs.next(tasks);
    });
  }

  add(task: Task) {
    const list = this.taskListObs.getValue();
    list.push(task);
    this.taskListObs.next(list);
  }

  delete(task: Task) {
    const list = this.taskListObs.getValue().filter(e => e !== task);
    this.taskListObs.next(list);
  }

  done(task: Task) {
    task.done = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
  }

  getTasksList(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
}
