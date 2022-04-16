import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from './model/todo.model';
import { filterType } from '../filters/filter.actions';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: TodoModel[], filter: filterType): TodoModel[] {
    return todos.filter((todo) => {
      switch (filter) {
        case 'all':
          return true;
        case 'active':
          return !todo.completed;
        case 'complete':
          return todo.completed;
      }
      return false;
    });
  }
}
