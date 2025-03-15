import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = '/api/todos'; // Fontos: /api prefix!

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id: string): Observable<Todo> {
    return this.http.get<Todo>(
      `<span class="math-inline">\{this\.apiUrl\}/</span>{id}`
    );
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  updateTodo(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `<span class="math-inline">\{this\.apiUrl\}/</span>{id}`,
      todo
    );
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(
      `<span class="math-inline">\{this\.apiUrl\}/</span>{id}`
    );
  }
}
