import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  blogList = [{
    key: 'id',
    value: 'Blog',
    description: 'Blog Description',
    type: 'text'
  }];

  constructor() { }

  getBlogList(): any {
    return this.blogList;
  }
}
