import { NULL_EXPR, TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, map, mergeScan } from 'rxjs/operators';
import { Message } from 'src/meesages/Message';
import { User } from 'src/users/user';


/**
 * PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex\src\app> npx ng g c ChatList
 * 
 * dispaly the messages to the users
 * 
 */
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {


  @Input()
  userId: number | null;//המזהה של היוזר השני בצט , כלומר נרצה להציג את ההודעות שמתקבלות מהיוזר בצד השני של המסך , לא את ההודעות שאנחנו שולחים

  messages$: Observable<Message[]> = this.store.pipe(
    select('entityCache', 'Messages', 'entities'),
    map((messages: Dictionary<Message>) => {
      const otherSideMessages: Message[] = [];

      for (let msg of Object.values(messages)) {
        if (msg?.userId === this.userId) {
          msg && otherSideMessages.push(msg)
        }
      }

      return otherSideMessages
    })
  )

  user$: Observable<User | undefined> = this.store.pipe(
    select('entityCache', 'Users', 'entities'),
    map((users: Dictionary<User>) => users[this.userId || -1])
  )




  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
