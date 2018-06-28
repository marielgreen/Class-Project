import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the Shelter1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shelter1',
  templateUrl: 'shelter1.html',
})
export class Shelter1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  navigateToPayment(){
    console.log("Navigating...");
    this.navCtrl.push(PaymentPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Shelter1Page');
  }

}
