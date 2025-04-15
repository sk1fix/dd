import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Partial<Task> = {
    type: 'task',
    status: 'open'
  };

  constructor(private taskService: TaskService) { }

  onSubmit() {
    if (this.task.type && this.task.status && this.task.title && this.task.creator) {
      this.taskService.addTask(this.task as Task);
      this.task = { type: 'task', status: 'open' };
    }
  }
}
