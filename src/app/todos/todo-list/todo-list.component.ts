import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoState, initialState } from '../todo.reducer';
import { filterType } from '../../filters/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TodoState = initialState;
  filter: filterType = 'all';
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state: AppState) => {
      this.todos = state.todos;
      this.filter = state.filter.filter;
    });
  }
}
