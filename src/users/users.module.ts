import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//אם אנחנו רוצים ליצור מודול שמוסיפ דברים לסטייט אנחנו צריכים לחבר אותו לסטור 
//לכל מודול שהוא לא הראשי אנחנו מחברים אותו לסטור עם פורפיטצ'ר
import { StoreModule } from '@ngrx/store'
/**
 * יצרנו מודול חדש שיהיה אחראי על טעינת היוזרים מהשרת
 * על ידי הםקודות
 * 
 * PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex> cd src
PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex\src> npx ng g module Users

כאשר אנחנו יוצרים מודול שצריך להוסיף דטה לסטור אנחנו יכולים שאותו מודול ינהל בעצמו את הדטה שלו
זה יסגור לנו את המודול ויצמצם תלותיות
זה גם הגיוני שהמודול של יוזרים יאתחל את עצמו


לצורך קח ניצור קובץ חדש בו נייצר את אבני הבניין הבסיסים
user model

 */

import { entityCacheSelectorProvider, EntityCollectionReducerFactory, ENTITY_METADATA_TOKEN, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';import { reduce } from 'rxjs/operators';
import { ACTIONS_SUBJECT_PROVIDERS } from '@ngrx/store/src/actions_subject';
import { SCANNED_ACTIONS_SUBJECT_PROVIDERS } from '@ngrx/store/src/scanned_actions_subject';
import {reducer} from './reducers/users.reducer'




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature('users',reducer),/*תחת איזה מפתח הוא ישמור את הסטייט של המודול שלנו*/
    
  ],
  providers: [
    {
      provide: ENTITY_METADATA_TOKEN, multi: true, useValue: {  //   השורה הזו אומרת לאנגולר דטה שיהיה מוכן לנהל עבורינו מפתח של יוזרז עם מידע שנלקח מהשרת ומסונכרן מהשרת
        Users: {}   //כבר מהשורה הזו נוצר לנו סרביס של יוזרס שיכול לבצע קריאות לשרת לכתובת של יוזרס 
        //הכתובת לשרת זוהי כתובת דיפולטיביט. נשנה אותה ברמה כל האפליקציה
        //באפ מודול של כל האפליקציה בהנחה שיש כתובות אחת זהה לכל הסרביסים באפליקציה הזו
      }
    },
    {
      provide: PLURAL_NAMES_TOKEN, multi: true, useValue: {//הגדרת הקריאה לרבים לשרת עבור האנטיטי הזה
        Users: 'Users'
      }
    }
  ]
})
export class UsersModule { }
