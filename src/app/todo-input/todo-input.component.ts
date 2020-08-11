import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
  providers: []
})

export class TodoInputComponent implements OnInit {
  @Output() onAdd = new EventEmitter<Todo>();
  bufferName;
  constructor() { }
  addTodo() {
    let str = this.bufferName;
    str= str.trim;
    this.onAdd.emit({
      id: -1,
      name: this.bufferName,
      completed: false
    });
    this.bufferName = "";
  }
  ngOnInit(): void {
  }

}
