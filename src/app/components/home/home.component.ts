import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../redux/app.reducers';
import {UserSelectors} from '../../redux/user/user.selectors';
import {UserState} from '../../redux/user/user.reducer';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
  loading = false;
  user: UserState;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.loading = true;
    this.store.select(UserSelectors.state).subscribe( user => {
      this.user = user;
      this.loading = false;
    });
  }
}
