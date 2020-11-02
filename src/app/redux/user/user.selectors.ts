import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.reducer';

export class UserSelectors {
  static readonly state = createFeatureSelector<UserState>('user');
  static readonly userToken = createSelector(UserSelectors.state, state => state.token);
}
