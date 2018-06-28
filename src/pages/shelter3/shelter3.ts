import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the Shelter3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shelter3',
  templateUrl: 'shelter3.html',
})
export class Shelter3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  navigateToPayment(){
    console.log("Navigating...")
    this.navCtrl.push(PaymentPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Shelter3Page');
  }

}
