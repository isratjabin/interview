import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() todo;

  @Output() itemSelected: EventEmitter<void> = new EventEmitter();

  @Output() editNoteItem: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }



  editNote(): void {
    this.editNoteItem.emit();
  }

}
