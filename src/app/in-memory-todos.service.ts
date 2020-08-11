import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryTodosService {
  createDb() {
    const todos = [
      {
        id: 0,
        name: 'Обосраться',
        completed: false
      },
      {
        id: 1,
        name: 'Пройти сборы',
        completed: true
      }
    ];
    return {todos};
  }
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }

  constructor() { }
}
