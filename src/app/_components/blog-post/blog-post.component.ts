import { Component, OnInit } from '@angular/core';
import { SelectedBlogService } from 'src/app/_services/selected-blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  id: number;

  constructor(private selectedBlogService: SelectedBlogService) { }

  ngOnInit() {
    this.selectedBlogService.selectedID.subscribe(id => this.id = id);
    console.log(this.id);
  }

}
