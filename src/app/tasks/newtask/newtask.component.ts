import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
@Input({required:true}) userId!:string;
@Output() close = new EventEmitter<void>();

enteredTitle = '';
enteredSummary = '';
enteredDate = '';
private tasksService = inject(TaskService);
onCancel(){
  this.close.emit();
}
onSubmit(){
  this.tasksService.addTask({
    title:this.enteredTitle,
    summary:this.enteredSummary,
    date:this.enteredDate,
  },this.userId)
  this.close.emit();

}
}