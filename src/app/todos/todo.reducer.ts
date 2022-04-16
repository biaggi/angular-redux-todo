import { createReducer, on, props } from '@ngrx/store';
import { TodoModel } from './model/todo.model';
import * as todoActions from './todo.actions';
import { todoCreator } from './model/todo.model';

export interface TodoState {
  todoList: TodoModel[];
}

export const initialState = {
  todoList: [
    { id: 1, text: 'prueba1', completed: false },
    { id: 2, text: 'prueba2', completed: false },
  ],
};

export const todoReducer = createReducer<TodoState>(
  initialState,
  on(todoActions.addTodo, (state, { text }) => {
    return { todoList: [...state.todoList, todoCreator(text)] };
  }),
  on(todoActions.updateTodo, (state, { id, text }) => {
    return {
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    };
  }),
  on(todoActions.toggleTodo, (state, { id }) => {
    return {
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    };
  }),
  on(todoActions.deleteTodo, (state, { id }) => {
    return { todoList: state.todoList.filter((todo) => todo.id !== id) };
  })
);
