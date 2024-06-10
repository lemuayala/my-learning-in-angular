import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent {
  task: any;
  taskForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    completed: new FormControl(false),
  });

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.getTaskById();
  }

  getTaskById(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.taskService.getTask(id).subscribe((data) => {
      this.task = data;
      this.setFormValues(this.task);
    });
  }

  setFormValues(task: any): void {
    this.taskForm.patchValue({
      title: task.title,
      completed: task.completed,
    });
  }

  onSubmit(): void {
    console.log(this.taskForm.value);
  }
}
