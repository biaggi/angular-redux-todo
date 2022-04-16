import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { addTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  txtInput = new FormControl('hola', Validators.required);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addTodo() {
    console.log('test', this.txtInput.valid, this.txtInput.value);
    if (this.txtInput.valid) {
      this.store.dispatch(addTodo({ text: this.txtInput.value }));
      this.txtInput.reset();
    }
  }
}
