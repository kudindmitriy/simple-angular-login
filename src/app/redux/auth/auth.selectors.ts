import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.reducer';

export class AuthSelectors {
  static readonly state = createFeatureSelector<AuthState>('auth');
  static readonly isAuthenticated = createSelector(AuthSelectors.state, state => state.isAuthenticated);
}
