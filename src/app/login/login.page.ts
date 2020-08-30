import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(
    public authFire: AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.authFire.signInWithEmailAndPassword(
        // never ever  in your life pull shit like this in production
        username + '@codedamn.com', password)
    } catch(err) {
      console.dir(err)
      if (err.code === 'auth/user-not-found') {
        console.log('User not found')

        // TODO: Implement a modal that says the corresponding username or password could
        // not be found.
        
      }
    }
  }

}
