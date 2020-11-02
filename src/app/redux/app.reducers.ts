import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from './user/user.reducer';
import {authReducer, AuthState} from './auth/auth.reducer';

export interface AppState {
  user: UserState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  auth: authReducer,
};
