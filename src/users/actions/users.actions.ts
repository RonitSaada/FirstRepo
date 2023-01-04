import { createAction, props } from '@ngrx/store';

export const SetRegisteredUser = createAction(
  '[Users] Set Registered User',
  props<{id:number,side:string}>()
);




