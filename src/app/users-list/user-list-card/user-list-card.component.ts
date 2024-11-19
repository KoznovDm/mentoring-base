import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list-card',
  standalone: true,
  imports: [],
  templateUrl: './user-list-card.component.html',
  styleUrl: './user-list-card.component.scss'
})
export class UserListCardComponent {
  @Input()
  user: any;

  @Output()
  deleteUser = new EventEmitter()

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId)
  }
}