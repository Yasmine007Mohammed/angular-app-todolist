import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
@Input() inputData:any
deleteInput(inputList:any){
  const i = this.inputData.indexOf(inputList)
  this.inputData.splice(i,1)
}
}
