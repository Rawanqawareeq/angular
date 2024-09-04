import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from './newtask/newtask.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userId!:string;
@Input({required:true}) name! : string;
isAddingTask :boolean= false;
constructor (private tasksService : TaskService){}
get selectedUserTask(){
  return this.tasksService.getUserTasks(this.userId);
}
onCompleteTask(id:string){
  

}
onStartAddTask(){
   this.isAddingTask = true;
}
onClose(){
  this.isAddingTask = false;
}

}