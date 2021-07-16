import { BlogsService } from './../../service/blogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: any;

  constructor(public blogSerive: BlogsService) { }

  ngOnInit(): void {
    this.blogs = this.blogSerive.getBlogList();
  }

}
