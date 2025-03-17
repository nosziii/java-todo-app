import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
})
export class TodoCreateComponent {
  todo: Todo = {
    id: '',
    title: '',
    description: '',
    dueDate: undefined,
    completed: false,
  };

  constructor(private todoService: TodoService, private router: Router) {}

  hello() {
    console.log('Hello from Angular');
  }

  createTodo() {
    this.todoService.createTodo(this.todo).subscribe({
      // Figyelj a kapcsos zárójelekre!
      next: (newTodo) => {
        console.log('Todo created:', newTodo);
        this.router.navigate(['/']); // Visszairányítás a listára
      },
      error: (error) => {
        console.error('Error creating todo:', error);
        // Itt jeleníthetsz meg hibaüzenetet a felhasználónak, pl. egy felugró ablakban, vagy egy div-ben az űrlap felett.
      },
    });
  }
}
