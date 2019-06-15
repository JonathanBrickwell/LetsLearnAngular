import { Component, OnInit } from '@angular/core';
import { Blogs } from '../../_models/blogs.model';
import { AllblogsService } from 'src/app/_services/allblogs.service';
import { SelectedBlogService } from '../../_services/selected-blog.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  blogs: Blogs[];
  blogID: number;

  constructor(
    private blogsService: AllblogsService,
    private selectedBlog: SelectedBlogService
    ) { 
    this.blogs = [];
   }

  ngOnInit() {

    this.selectedBlog.selectedID.subscribe(blogID => this.blogID = blogID);

    this.blogsService.getAllBlogs().subscribe((blogs: Blogs[]) => {
      this.blogs = blogs;
      console.log(blogs);
    });
  }

  getBlogID(id: number) {
    this.blogID = id;
    this.selectedBlog.getBlogID(this.blogID);
    console.log(this.blogID);
  }

}
