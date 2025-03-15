import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  todo: Todo = {
    id: '',
    title: '',
    description: '',
    dueDate: undefined,
    completed: false,
  };
  //isLoading = true;  // Töltésjelzőhöz

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getTodoById(id).subscribe({
        // Figyelj a kapcsos zárójelekre!
        next: (todo) => {
          this.todo = todo;
          //this.isLoading = false; // Ha van töltésjelződ
        },
        error: (error) => {
          console.error('Error loading todo:', error);
          // Itt jeleníthetsz meg hibaüzenetet, pl. átirányíthatod a felhasználót a hiba oldalra, vagy egy üzenetet mutathatsz.
          this.router.navigate(['/']); // Vissza a listára, ha hiba történt.
        },
      });
    } else {
      // Handle the case where id is null, e.g., redirect to list
      this.router.navigate(['/']);
    }
  }

  updateTodo() {
    this.todoService.updateTodo(this.todo.id, this.todo).subscribe({
      // Figyelj a kapcsos zárójelekre!
      next: () => {
        // Sikeres update. Nem várunk vissza értéket.
        this.router.navigate(['/']); // Visszairányítás a főoldalra
      },
      error: (error) => {
        console.error('Error updating todo:', error);
        // Itt jeleníthetsz meg hibaüzenetet a felhasználónak.
      },
    });
  }
}
