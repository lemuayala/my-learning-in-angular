import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks!: any[];

  constructor(private taskService: TaskService) {
    this.getTask();
  }

  getTask(): void {
    this.taskService.getTasks().subscribe((r) => {
      this.tasks = r;
      console.log(this.tasks);
    });
  }
}
