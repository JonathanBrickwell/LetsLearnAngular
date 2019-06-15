import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedBlogService {

  id: number;

  private blogID = new BehaviorSubject(this.id);
  selectedID = this.blogID.asObservable();

  constructor() { }

  getBlogID(id: number) {
    this.blogID.next(id);
    console.log(this.blogID);
  }
}
