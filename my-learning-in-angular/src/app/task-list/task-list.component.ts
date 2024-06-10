import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink, CommonModule, NgxPaginationModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks!: any[];
  currentPage: number = 1;

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
