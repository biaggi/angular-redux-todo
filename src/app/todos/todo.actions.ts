import { createAction, props } from '@ngrx/store';
import { TodoModel } from './model/todo.model';

export const addTodo = createAction('[Todo] addTodo', props<{text: string}>());
export const deleteTodo = createAction('[Todo] deleteTodo', props<{id: number}>());
export const setTodoComplete = createAction('[Todo] setTodoComplete', props<{id: number}>());
export const updateTodo = createAction('[Todo] updateTodo', props<{id: number, text: string}>());
export const toggleTodo = createAction('[Todo] toggleTodo', props<{id: number}>());
