import {HttpErrorResponse} from '@angular/common/http';
import {ActionAuth, AuthActions} from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  authError: HttpErrorResponse;
}

export const initialStateAuth: AuthState = {
  isAuthenticated: false,
  authError: null,
};

export function authReducer(state = initialStateAuth, action: ActionAuth): AuthState {
  switch (action.type) {
    case AuthActions.LOG_IN:
      return {
        ...state, isAuthenticated: true, authError: null
      };
      case AuthActions.LOG_OUT:
      return initialStateAuth;
    default:
      return state;
  }
}
