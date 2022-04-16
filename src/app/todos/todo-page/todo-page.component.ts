import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAllTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  ckbToggle: FormControl = new FormControl(false);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.ckbToggle.valueChanges.subscribe((value) => {

      this.store.dispatch(toggleAllTodo({completed: value}))
    })
  }
}
