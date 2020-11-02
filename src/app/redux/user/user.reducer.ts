import {ActionUser, UserActions} from './user.actions';

export interface UserState {
  name: string;
  email: string;
  token: string;
}

export const initialStateUser: UserState = {
  name: null,
  email: null,
  token: null,
};

export function userReducer(state = initialStateUser, action: ActionUser): UserState {
  switch (action.type) {
    case UserActions.ADD_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token
      };
    case UserActions.CLEAR_STATE:
      return initialStateUser;
    default:
      return state;
  }
}
