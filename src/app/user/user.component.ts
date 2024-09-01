import { Component, computed,  Input,EventEmitter, Output, input   } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
import { type User } from './user.model';
const randromIndex =  Math.floor(Math.random() *  DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) user!:User;
  @Output() select = new EventEmitter<string>();
   //id = input.required<string>();
 
  // select = output<string>();
   //selectorUser = signal(DUMMY_USERS[randromIndex]) ;
   //imagePath = computed(()=>'assets/users/' + this.selectorUser().avatar);
   get imagePath(){
     return 'assets/users/' + this.user.avatar;
   }
   onselectorUser(){
    this.select.emit(this.user.id);
   }
}
