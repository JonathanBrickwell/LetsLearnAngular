import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogs, BlogsAdapterContainer } from '../_models/blogs.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllblogsService {

  private url = './assets/json/blogs.json';

  constructor(
    private http: HttpClient,
    private adapter: BlogsAdapterContainer
  ) { }

  public getAllBlogs(): Observable<Blogs[]> {
    const url = `${this.url}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }
}
