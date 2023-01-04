import { NgModule } from '@angular/core';
//import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

//PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex> npx ng g library auth

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
   // AuthComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
   // AuthComponent
   RegisterComponent
  ]
})
export class AuthModule { }
