import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tasks } from '../data/tasks';
import { User } from '../models/user';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: '../views/tasks.component.html',
  standalone: true,
  imports: [CommonModule]
})

export class TasksComponent {
  @Input() selectedUser!: User;
  @Output() toggleFormVis = new EventEmitter<void>();
  tasks: Task[] = tasks;

  get filteredTasks(): Task[] { 
    return tasks.filter(task => task.userId === this.selectedUser.id);
  }

  onCompleteTask(id: string) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  onToggleFormVis() { 
    this.toggleFormVis.emit();
  }
}