import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthActions} from '../redux/auth/auth.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.reducers';
import {AuthSelectors} from '../redux/auth/auth.selectors';
import {take} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private isUserAuthenticated: boolean;
  constructor(
    private router: Router,
    private authActions: AuthActions,
    private store: Store<AppState>,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.select(AuthSelectors.isAuthenticated).pipe(take(1)).subscribe(isAuthenticated => {
     this.isUserAuthenticated = isAuthenticated;
    });
    if (this.isUserAuthenticated) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
