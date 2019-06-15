import { BlogsAdapter } from '../_interfaces/blogs-adapter';
import { Injectable } from '@angular/core';

export class Blogs {
    constructor(
        public id: number,
        public name: string,
        public content: string,
        public bg: string,
    ) {}
}

@Injectable({
    providedIn: 'root'
})

export class BlogsAdapterContainer implements BlogsAdapter<Blogs> {
    
    adapt(item: any): Blogs {
        return new Blogs(
          item.id,
          item.name,
          item.content,
          item.bg
        );
      }
}
