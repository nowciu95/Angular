import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasksList: Array<Task> = [];
  doneList: Array<Task> = [];

  taskListObs = new BehaviorSubject<Array<Task>>([]);
  doneListObs = new BehaviorSubject<Array<Task>>([]);
  constructor() {
    this.taskListObs.next(this.tasksList);
  }

  add(task: Task) {
    this.tasksList.push(task);
    this.taskListObs.next(this.tasksList);
  }

  delete(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.taskListObs.next(this.tasksList);
  }

  done(task: Task) {
    this.doneList.push(task);
    this.delete(task);
    this.doneListObs.next(this.doneList);
  }

  getTasksList(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getDoneList(): Observable<Array<Task>> {
    return this.doneListObs.asObservable();
  }
}
