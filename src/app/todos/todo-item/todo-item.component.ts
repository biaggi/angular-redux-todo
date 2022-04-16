import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoModel } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { deleteTodo, toggleTodo, updateTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel = { id: 0, text: '', completed: false };
  @ViewChild('inputFisico')
  txtInputFisico!: ElementRef;
  editando: boolean = false;

  chkCompletado: FormControl = new FormControl();
  txtInput: FormControl = new FormControl();
  constructor(private store: Store<AppState>, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    // on checkbox toggle
    this.chkCompletado.valueChanges.subscribe((value) => {
      console.log(this.todo, value);
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });
  }
  // on double click in the element
  edit() {
    this.editando = true;
    this.ref.detectChanges();
    this.txtInputFisico.nativeElement.select();
  }
  // on enter in the edited element
  update() {
    this.store.dispatch(
      updateTodo({ id: this.todo.id, text: this.txtInput.value })
    );
    this.editando = false;
  }
  // on delete button
  delete() {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }
}
