import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userObj: any;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(user => this.userObj = user);
    firebase.auth().useDeviceLanguage();
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(error => {
        console.log('Something went wrong:', error.message);
      });
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        return;
      })
      .catch(error => {
        return error;
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut()
      .then(_ => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  resetPassword(email): firebase.Thenable<any> {
    console.log(`Reset password for ${email}.`);
    return this.firebaseAuth
    .auth.sendPasswordResetEmail(email).then(function() {
      return `An email was sent to ${email}.`;
    }).catch(function(error) {
      return `Error: ${error.message}.`;
    });
  }

  deleteAccount() {
    firebase.auth().currentUser
    .delete().then(function() {
      alert(`User deleted.`);
      // logs out automatically
    }).catch(function(error) {
      alert(error);
    });
  }
}
