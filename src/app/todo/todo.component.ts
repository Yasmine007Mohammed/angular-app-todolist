import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
inputList:any= " "
inputArray:any[]=[]
add(inputList:any){
  this.inputArray.push(inputList)
}
}
