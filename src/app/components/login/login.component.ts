import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthActions} from '../../redux/auth/auth.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../redux/app.reducers';
import {AuthSelectors} from '../../redux/auth/auth.selectors';
import {take} from 'rxjs/operators';
import {UserActions} from '../../redux/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authActions: AuthActions,
    private userActions: UserActions,
    private store: Store<AppState>,
  ) {
    // redirect to home if already logged in
    this.store.select(AuthSelectors.isAuthenticated).pipe(take(1)).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    // there should be a call to the backend and getting the user object
    if (this.f.username.value === 'admin' && this.f.password.value === 'qwerty') {
      this.loading = false;
      this.store.dispatch(this.authActions.auth(true));
      this.store.dispatch(this.userActions.addUser('admin', 'test_admin@gmail.com', '12kdslRTMSMA23213sdpewH'));
      this.router.navigate([this.returnUrl]);
    } else {
      this.error = 'Username or password is incorrect';
      this.loading = false;
      return;
    }
  }
}
