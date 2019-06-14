import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../_models/blogs.model';
import { AllblogsService } from 'src/app/_services/allblogs.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  blogs: Blogs[];

  constructor(private blogsService: AllblogsService) { 
    this.blogs = [];
   }

  ngOnInit() {
    this.blogsService.getAllBlogs().subscribe((blogs: Blogs[]) => {
      this.blogs = blogs;
      console.log(blogs);
    });
  }

}
