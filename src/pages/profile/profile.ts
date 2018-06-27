import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProvidersPage } from '../providers/providers';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class profilepage {

  constructor(public navCtrl: NavController) {}
  navigatetoHome(){
      console.log("Navigating....");
      this.navCtrl.popTo(HomePage);
      this.navCtrl.popTo(HomePage);
      
  }
  navigatetoProviders(){
    console.log("Navigating...");
    this.navCtrl.push(ProvidersPage);
  }
  

}