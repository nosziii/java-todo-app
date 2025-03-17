import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Fontos!
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    CommonModule, // Nagyon fontos!
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoEditComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
