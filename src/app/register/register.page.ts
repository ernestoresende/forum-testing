import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public authFire: AngularFireAuth,
    public alertCtrl: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      this.showAlert("Error!", "The passwords don't match.")
      return console.error("Passwords don't match")
    }

    try {
      const res = await this.authFire.createUserWithEmailAndPassword(
        username + '@codedamn.com', password
      )
      console.log(res)
      this.showAlert("Sucess!", "Welcome aboard!")
      this.router.navigate(['/tabs'])
    } catch(error) {
      console.dir(error)
      this.showAlert("Error", error.message)
    }
  } 

  // This serves as a template for the alerts
  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header, 
      message,
      buttons: ["Ok"]
    })

    await alert.present()
  }
}
