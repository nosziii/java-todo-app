import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  isLoading = true; // Töltésjelzőhöz

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe({
      // Figyelj a kapcsos zárójelekre!
      next: (todos) => {
        this.todos = todos || []; // Ha null jön a service-ből, akkor üres tömb
        this.isLoading = false; // Töltés vége
      },
      error: (error) => {
        console.error('Error loading todos:', error);
        // Itt jeleníthetsz meg hibaüzenetet a felhasználónak (pl. egy div-ben).
        this.isLoading = false; // Töltés vége (hiba esetén is)
      },
    });
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe({
      // Figyelj a kapcsos zárójelekre!
      next: () => {
        this.loadTodos(); // Frissítjük a listát a törlés után (nincs szükség a visszatérési értékre)
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
        // Itt jeleníthetsz meg hibaüzenetet a felhasználónak.
      },
    });
  }
}
