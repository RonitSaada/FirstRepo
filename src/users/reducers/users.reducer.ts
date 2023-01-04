import { Action, createReducer, on } from '@ngrx/store';


import { SetRegisteredUser } from '../actions/users.actions'

/**
 * See "C:\Users\97254\AppData\Local\Temp\ng-XAvd1N\angular-errors.log" for further details.
PS C:\Users\97254\Documents\Asus PC\advanced Angular\test\ngrx-ex\src\users> npx ng g reducer users -r -g 
? Should we add success and failure actions to the reducer? No

 */

export const usersFeatureKey = 'users';

export interface State {
  rightUser: number;
  leftUser: number;
}

export const initialState: State = {
  rightUser: 0,
  leftUser: 0
};

export const reducer = createReducer(
  initialState,
  on(SetRegisteredUser, (state, action) => ({ ...state, [action.side + 'User']: Math.floor(1000 * Math.random())/*action.id בגלל שאנחנו עובדים מול פייק סרביס הוא תמיד יחזיר לנו את אותו המספר ואנו צריכים מזהה יחודי*/ }))
);
