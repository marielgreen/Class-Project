import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { profilepage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}
  navigateToProfile(){
    console.log("Navigating...");

    this.navCtrl.push(profilepage);
  }
}