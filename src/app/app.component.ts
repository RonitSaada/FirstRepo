import { Component } from '@angular/core';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data'
import { User } from 'src/users/user';

import { select, Store } from '@ngrx/store'
import { SetRegisteredUser } from '../users/actions/users.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-ex';


  private usersService: EntityCollectionService<User>


  leftUserId$: Observable<number> = this.store$.pipe(
    select('users', 'leftUser')
  )

  rightUserId$: Observable<number> = this.store$.pipe(
    select('users', 'rightUser')
  )

  constructor(userServiceFactory: EntityCollectionServiceFactory, private store$: Store<any>) {
    this.usersService = userServiceFactory.create('Users')

  }

  registerUser = (values: any, side: string) => {
    //יש לנו סרביס מוכן שמנהל את הרשימה של היוזרים ויכול גם להוסיף יוזר חדש
    //זהו סרביס שנוצר על ידי שימוש בניהול הסטור שלנו על ידי
    //ngrx/data
    this.usersService.add(values).subscribe((user: User) => {
      //אחרי שהשתמשנו בסרביס המוכן להוסיף את היוזר אנחנו ניקח את הסטור ונפעיל את האקשן של עדכון היוזר בצד הרלוונטי
      this.store$.dispatch(SetRegisteredUser({ id: user.id, side: side }))
    })
  }
}
