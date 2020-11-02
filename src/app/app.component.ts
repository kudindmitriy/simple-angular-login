import {Component, OnInit} from '@angular/core';
import {AppState} from './redux/app.reducers';
import {Store} from '@ngrx/store';
import {AuthSelectors} from './redux/auth/auth.selectors';
import {Subscription} from 'rxjs';
import {UserSelectors} from './redux/user/user.selectors';
import {UserState} from './redux/user/user.reducer';
import {AuthActions} from './redux/auth/auth.actions';
import {UserActions} from './redux/user/user.actions';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'react-angular-merge';
  isUserAuthenticated: boolean;
  user: UserState;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authActions: AuthActions,
    private userActions: UserActions,
    ) {
  }

  ngOnInit(): void {
    this.store.select(AuthSelectors.isAuthenticated).subscribe(isAuthenticated => {
      this.isUserAuthenticated = isAuthenticated;
    });
    this.store.select(UserSelectors.state).subscribe( user => {
       this.user = user;
    });
  }

  logout(): void {
    this.store.dispatch(this.authActions.clearState());
    this.store.dispatch(this.userActions.clearState());
    this.router.navigate(['/login']);
  }
}
