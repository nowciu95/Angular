import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTasksComponent } from './todo-tasks/todo-tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { DateDirective } from './shered/date.directive';
import { HttpService } from 'src/app/services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTasksComponent,
    DoneTasksComponent,
    DateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
