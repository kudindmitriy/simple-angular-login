import {Injectable} from '@angular/core';

export interface ActionUser {
  type: string;
  payload: {
    name?: string;
    email?: string;
    token?: string;
  };
}

@Injectable()
export class UserActions {
  static readonly ADD_USER = '[User] Add user';
  static readonly CLEAR_STATE = '[User] clear state';

  addUser = (name: string, email: string, token: string): ActionUser => ({
    type:    UserActions.ADD_USER,
    payload: {
      name,
      email,
      token
    }
  })

  clearState = (): ActionUser => ({
    type:    UserActions.CLEAR_STATE,
    payload: {}
  })
}
