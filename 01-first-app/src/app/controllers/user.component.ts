import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { users } from '../data/users'
import { User } from '../models/user';
import { TasksComponent } from './tasks.component';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TasksComponent, FormComponent],
  templateUrl: '../views/user.component.html'
})

export class UserComponent {
  users: User[] = users;
  formVisible: boolean = true;
  selectedUser: WritableSignal<User> = signal(users[0]);

  onSelectUser(user: User) { 
    this.selectedUser.set(user)
  }

  toggleFormVisibility() { 
    this.formVisible = true;
  }
}