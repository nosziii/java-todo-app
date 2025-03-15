// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'create', component: TodoCreateComponent },
  { path: 'edit/:id', component: TodoEditComponent },
  { path: '**', redirectTo: '' }, // Ha semmi nem egyezik, irányítson a főoldalra
];
