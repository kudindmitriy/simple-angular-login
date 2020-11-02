import {Injectable} from '@angular/core';

export interface ActionAuth {
  type: string;
  payload: {
    isAuthenticated?: boolean
  };
}

@Injectable()
export class AuthActions {
  static readonly LOG_IN = '[Auth] Login';
  static readonly LOG_OUT = '[Auth] Logout';

  auth = (isAuthenticated: boolean): ActionAuth => ({
    type:    AuthActions.LOG_IN,
    payload: {
      isAuthenticated
    }
  })

  clearState = (): ActionAuth => ({
    type:    AuthActions.LOG_OUT,
    payload: {}
  })
}
