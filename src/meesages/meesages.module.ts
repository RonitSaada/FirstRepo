import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENTITY_METADATA_TOKEN, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { MessagesEffects } from './messages.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([MessagesEffects])/**
    ככה יצרנו את השורה הזו
    PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex> cd src
PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex\src> cd meesages
PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex\src\meesages> npx ng g effect messages
? To which module (path) should the effect be registered in? ./meesages.module.ts
? Should we wire up success and failure actions? No
? What should be the prefix of the effect? n
    */
  ],
  providers:[
    {
      provide: ENTITY_METADATA_TOKEN, multi: true, useValue: {  //   השורה הזו אומרת לאנגולר דטה שיהיה מוכן לנהל עבורינו מפתח של יוזרז עם מידע שנלקח מהשרת ומסונכרן מהשרת
        Messages: {}   //כבר מהשורה הזו נוצר לנו סרביס של יוזרס שיכול לבצע קריאות לשרת לכתובת של יוזרס 
        //הכתובת לשרת זוהי כתובת דיפולטיביט. נשנה אותה ברמה כל האפליקציה
        //באפ מודול של כל האפליקציה בהנחה שיש כתובות אחת זהה לכל הסרביסים באפליקציה הזו
      }
    },
    {
      provide: PLURAL_NAMES_TOKEN, multi: true, useValue: {//הגדרת הקריאה לרבים לשרת עבור האנטיטי הזה
        Messages: 'todos'
      }
    }
  ]
})
export class MeesagesModule { }
