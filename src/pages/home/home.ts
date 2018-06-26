import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../Login/login';
import { Registerpage } from '../register/register';
import { profilepage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  navigateToLogin(){
    console.log("Navigating...");

    this.navCtrl.push(LoginPage);
  
  }
  navigateToRegister(){
    console.log("Navigating...");

    this.navCtrl.push(Registerpage);
  }

}
