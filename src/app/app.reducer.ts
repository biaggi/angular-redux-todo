import { ActionReducerMap } from '@ngrx/store';
import { TodoState, todoReducer } from './todos/todo.reducer';
import { filterReducer, FilterState } from './filters/filter.reducer';

export interface AppState {
  todos: TodoState;
  filter: FilterState
}

export const AppReducers: ActionReducerMap<AppState> ={
  todos: todoReducer,
  filter: filterReducer
}
