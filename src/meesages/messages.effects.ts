import { Injectable } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { mergeMap, tap } from 'rxjs/operators';
import { Message } from './Message';



@Injectable()
export class MessagesEffects implements OnInitEffects {

  private messagesService: EntityCollectionService<Message>//זהו הסוג של הסרביס

  initMessages$ = createEffect(() => this.actions$.pipe(
    ofType('INIT_MESSAGES'),
    mergeMap(() =>
      this.messagesService.getAll()/*מקבל את האקשיין שקרה ויחזיר אובזרוובל אחר של קריאה לשרת */
    ) //,tap((msgs: Message[]) => console.table(msgs))
  ), { dispatch: false });

  constructor(private actions$: Actions, private serviceFactory: EntityCollectionServiceFactory) {
    this.messagesService = serviceFactory.create('Messages')//השורה הזו מביאה את הסרביס של יוזר ונשמור אותו אצלנו במשתנה מקומי של האפקט

  }


  ngrxOnInitEffects(): Action {
    return {
      type: 'INIT_MESSAGES'
    }
  }
}
