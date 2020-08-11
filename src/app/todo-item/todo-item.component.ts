import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [TodosService]
})
export class TodoItemComponent implements OnInit {
  @Input() todo;
  @Output() onDelete = new EventEmitter<Todo>();
  @Output() onToggle = new EventEmitter<Todo>();
  toggle(todo){
    this.onToggle.emit(todo);
  }
	deleteTodo(todo: Todo) {
		this.onDelete.emit(todo);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
