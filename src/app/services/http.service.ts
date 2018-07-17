import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '../../../node_modules/@angular/common/http';
import { Task } from 'src/app/interfaces/task';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL = 'https://api.mlab.com/api/1/databases/azure_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'juBqTnh_SDc_KDZkSQvlzfKMsml9HKIR');


  constructor(private http: HttpClient) { }

  getTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL, {params: this.param});
  }
}
