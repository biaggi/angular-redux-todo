import { createAction, props } from '@ngrx/store';
export type filterType = 'all' | 'active' | 'complete';
export const setFilter = createAction(
  '[Filter] setFilter',
  props<{ filter: filterType }>()
);
