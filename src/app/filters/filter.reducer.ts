import { createReducer, on } from '@ngrx/store';
import { filterType } from './filter.actions';
import * as filterActions from './filter.actions';
export interface FilterState {
  filter: filterType;
}

export const initialState: FilterState = { filter: 'all' };

export const filterReducer = createReducer(
  initialState,
  on(filterActions.setFilter, (state, { filter }) => {
    return { ...state, filter };
  })
);
