import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data'//נבקש את הסרביס הדיפולטיבי שישמש אותנו לעשות קריאות לשרת
import { User } from './user';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators'

/**
 *  * אם תהיה בעיה ביצירת אפקט למודול נפרד אז הרצתי את הפקודה הזו וזה פתר את זה
 * An unhandled exception occurred: Schematic "effect" not found in collection "@schematics/angular".
 * 
 * הפתרון
 * PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex> npm i @ngrx/schematics -D
 */

@Injectable()
export class UsersEffects implements OnInitEffects {
  //נעשה מימוש לאינטרפייס של און איניט, כדי להקפיץ מתודה כאשר הקובץ של האפקט יאותחל
  //.זה מאפשר לנו לעשות פעולות באיתחול


  private usersService: EntityCollectionService<User>//זהו הסוג של הסרביס
  //זהו סרביס חזק מאוד ששומר על ההמידע אצלו מסונכן עם המידע בשרת
  //דרכו נוכל לבצע את כל הפעולות
  //הוא מעדכן את הסטור
  //נותן לנו גישה לכל הקוד האוטומטי שה
  //NGRX/DATA
  //מבטיח לספק לנו



  // ההתנהגות הדיפולטיבית של אפקט זה להחזיר אקשן , אנחנו יכולים לשנות את זה ולהגיד שאנחנו לא רוצים להחזיר אקשן מהאובזרוובל הזה
  // למרות שמאחורי הקלעים האובזרוובל הפונקציה של הסרביס כן תוציא אקשנים, האובזרוובל עצמו בסוף יחזיר 
  //users$
  //הגט אוול עטף לנו סדרה של אקשנים שיעדכנו לנו את הסטייט אז אין בעיה
  // @Effect({
  //   dispatch: false
  // })
  // initUsers$: Observable<User[]> = this.actions$.pipe(
  //   ofType('INIT_USERS'),/*אופרטור בהקשר של האפקט,
  //    עושה פילטור של כל האקשנים שקרו והוא יוציא רק אקשיינים שהטייפ שלהם הוא בדיוק המחזורת הזו*/
  //   /**לוקח אובזרוובל אחד ומחזיר אובזרוובל אחר */
  //   mergeMap(() =>
  //     this.usersService.getAll()/*מקבל את האקשיין שקרה ויחזיר אובזרוובל אחר של קריאה לשרת */
  //   ),
  //   tap((users: User[]) => console.table(users))
  // )

  
  initUsers$ = createEffect(() => this.actions$.pipe(
    ofType('INIT_USERS'),
   mergeMap(() =>
     this.usersService.getAll()/*מקבל את האקשיין שקרה ויחזיר אובזרוובל אחר של קריאה לשרת */
   )// ,tap((users: User[]) => console.table(users))
  ), {dispatch: false});



  constructor(private actions$: Actions, private serviceFactory: EntityCollectionServiceFactory) {
    this.usersService = serviceFactory.create('Users')//השורה הזו מביאה את הסרביס של יוזר ונשמור אותו אצלנו במשתנה מקומי של האפקט
    //הבקשות לשרת הולכות להיות מסונכרנות עם הטור שלנו
    //והסטור הולך להיות מסונכן עם השרת
    //זו גולת הכותרת שלו
    //ניהול סטייט בשבילנו בלי שנצטרך לכתוב שום דבר
    //הסטייט שהוא מנהל הוא קשור לשרת לאנטיטי, מקושר לטבלאות בדטה בייס
    //
  }


  ngrxOnInitEffects(): Action {

    return {
      type: 'INIT_USERS'
    }
  }

}

