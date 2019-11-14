import { Injectable } from '@angular/core';
import { AccountService } from '../auth/account.service';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private accountService: AccountService, private authService: AuthService) {}

  login() {
    this.authService
      .signIn()
      .then(data => {
        this.accountService.identity(true).then(account => {
          // After the login the language will be changed to
          // the language selected by the user during his registration
          if (account !== null) {
            console.log(account);
          }
        });
      })
      .catch(error => {
        console.error(`Sign in error: ${error}`);
      });
  }

  logout() {
    this.authService.signOut();
    this.accountService.authenticate(null);
  }
}
