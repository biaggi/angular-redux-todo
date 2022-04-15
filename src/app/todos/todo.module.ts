import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoPageComponent,
    TodoListComponent,
  ],
  imports: [CommonModule],
  exports: [TodoPageComponent],
})
export class TodoModule {}
