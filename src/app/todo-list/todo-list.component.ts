import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodosService]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  
  constructor(private todosService: TodosService) { }
  onDelete(todo): void{
    this.todos = this.todos.filter(todos => todos !== todo);
    this.todosService.deleteTodo(todo).subscribe();
  }
  onToggle(todo): void{
   this.todosService.toggleTodo(todo);
  }
  onAdd(todo): void{
    todo.id = this.todosService.genId(this.todos);
    this.todos.push(todo);
    /*this.todosService.addTodo(todo)
    .subscribe(todo => {
      this.todos.push(todo);
    });*/
  }
  getTodos(): void {
    this.todos = [];
    /*this.todosService.getTodo()
    .subscribe(todos => this.todos = todos);*/
  }
  ngOnInit(): void {
    this.getTodos();
  }
}
