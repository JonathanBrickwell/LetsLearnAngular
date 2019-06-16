import { Component, OnInit } from '@angular/core';
import { SelectedBlogService } from 'src/app/_services/selected-blog.service';
import { AllblogsService } from 'src/app/_services/allblogs.service';
import { Blogs } from 'src/app/_models/blogs.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  allBlogs: Blogs[];
  blogFound: Blogs[];
  id: number;

  constructor(
    private selectedBlogService: SelectedBlogService,
    private blogs: AllblogsService
    ) { 
      this.allBlogs = [],
      this.blogFound = [];
    }

  ngOnInit() {
    this.blogs.getAllBlogs().subscribe((allBlogs: Blogs[]) => {
      this.allBlogs = allBlogs;
      this.findBlog(this.allBlogs)
    });
    this.selectedBlogService.selectedID.subscribe(id => this.id = id);
  }

  findBlog(allAvailableBlogs: Blogs[]) {
    this.blogFound.push(allAvailableBlogs.find( blog => blog.id === this.id ));
    console.log(this.blogFound);
  }

}
