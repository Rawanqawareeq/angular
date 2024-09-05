import { Component} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  SelectedUserId?:string;
  get selectedUser(){
    return this.users.find((user)=>{return user.id === this.SelectedUserId});
  }
  onselectorUser(id:string){
    this.SelectedUserId = id;
  }
}
