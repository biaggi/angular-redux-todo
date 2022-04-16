import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filterType, setFilter } from '../../filters/filter.actions';
import { cleanCompletedTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filter: filterType = 'all';
  pending: number = 0;
  filters: filterType[] = ['all', 'active', 'complete'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state: AppState) => {
      this.filter = state.filter.filter;
      this.pending = (state.todos.todoList.filter(todo =>  !todo.completed)).length
    });
  }

  setFilter(filter: filterType) {
    this.store.dispatch(setFilter({ filter: filter }));
  }
  clearCompleted() {
    this.store.dispatch(cleanCompletedTodo())
  }
}
