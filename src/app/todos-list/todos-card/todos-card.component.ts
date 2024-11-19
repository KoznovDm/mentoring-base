import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-list.interface';

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [],
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss'
})
export class TodosCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodos = new EventEmitter()

  onDeleteTodos(todoId: number) {
    this.deleteTodos.emit(todoId)
  }
}
