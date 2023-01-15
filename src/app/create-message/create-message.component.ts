import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data'
import { Message } from 'src/meesages/Message';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {


  @Input()
  userId: number | null;//המזהה של היוזר השני שכרגע יצר את ההודעה

  private _messageService: EntityCollectionService<Message>;

  constructor(private serviceFactory: EntityCollectionServiceFactory) {
    this._messageService = serviceFactory.create('Messages');
  }

  ngOnInit() {
  }

  createMessage = (createForm: NgForm) => {
    this._messageService.add(
      {
        title: createForm.value.message,
        userId: this.userId || -1,
        id: Math.floor(1000 * Math.random()),
        createdAt: Date.now().toString()
      })
  }


}

