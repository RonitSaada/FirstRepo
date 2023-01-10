import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  @Input()
  userId: number | null;//המזהה של היוזר השני שכרגע יצר את ההודעה

  constructor() { }

  ngOnInit(): void {
  }


  createMessage = () => {

  }

}
