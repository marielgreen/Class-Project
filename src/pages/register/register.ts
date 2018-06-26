import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { profilepage } from '../profile/profile';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Registerpage {

  constructor(public navCtrl: NavController) {}
  navigatetoprofile(){
      console.log("Navigating...");
      this.navCtrl.push(profilepage);
  }

}