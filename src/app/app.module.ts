import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { UsersModule } from 'src/users/users.module';
import { HttpClientModule } from '@angular/common/http'
import { MeesagesModule } from 'src/meesages/meesages.module';

/**
 * 
 * החבילות שהתקנתי בפרוייקט הזה
 * npx @angular/cli@11.2.0 new ngrx-ex
 * 
 * npm i bootstrap
 *  ng add @ngrx/store@12.4.0 --no-minimal
 *  ng add @ngrx/effects@12.4.0 --no-minimal
 *  ng add @ngrx/entity@12.4.0
 *  ng add @ngrx/data@12.4.0
 * ng add @ngrx/schematics@12.4.0
 * 
 * 
 * 
 * אם תהיה בעיה ביצירת אפקט למודול נפרד אז הרצתי את הפקודה הזו וזה פתר את זה
 * An unhandled exception occurred: Schematic "effect" not found in collection "@schematics/angular".
 * 
 * הפתרון
 * PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex> npm i @ngrx/schematics -D
 * 
 */



import { AuthModule } from 'auth';
import { ChatListComponent } from './chat-list/chat-list.component';
import { CreateMessageComponent } from './create-message/create-message.component'//'@umtb/auth'
//האימורט זה הקוד פיתוח
//אם משתמשים בחבילה מספר אפליקציות שונות אז כולן תלויות בחבילה הזו
//זה אומר שאם נשנה את הסיפריה אנחנו פוטנציאלית נשבור הרבה דברים
//לכן אם משתמשים בחבילה במספר פרוייקטים צריך לעשות לה ניהול גרסאות באופן הבא
//כל פעם שנרצה לעשות שינוי, נעשה בילד ונדחוף ל
//NPM
//את הגרסה החדשה
//באפליקציות לא נצרוך את הקוד מקור אלא נצרוך גרסה מסויימת 

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    CreateMessageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      // runtimeChecks: {
      //   strictActionImmutability: true,
      //   strictStateImmutability: true
      // }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
    UsersModule,
    HttpClientModule,
    MeesagesModule,
    AuthModule,
    FormsModule
  ],
  providers: [{
    provide: DefaultDataServiceConfig, useValue: {
      root: 'https://jsonplaceholder.typicode.com'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
