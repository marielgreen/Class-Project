import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shelter1Page } from '../shelter1/shelter1';
import { Shelter2Page } from '../shelter2/shelter2';
import { Shelter3Page } from '../shelter3/shelter3';
import { Shelter4Page } from '../shelter4/shelter4';
import { Shelter5Page } from '../shelter5/shelter5';

/**
 * Generated class for the ProvidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providers',
  templateUrl: 'providers.html',
})
export class ProvidersPage {

  public Providers: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Providers =[
      "Homeless Shelter 1",
      "Homeless Shelter 2",
      "Homeless Shelter 3",
      "Homeless Shelter 4",
      "Homeless Shelter 5"
    ];

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidersPage');
  }

  itemSelected(Provider){
    if (Provider=="Homeless Shelter 1") 
      this.navCtrl.push(Shelter1Page)
    if (Provider=="Homeless Shelter 2")
      this.navCtrl.push(Shelter2Page)
    if (Provider=="Homeless Shelter 3")
      this.navCtrl.push(Shelter3Page);
    if (Provider=="Homeless Shelter 4")
      this.navCtrl.push(Shelter4Page);
    if (Provider=="Homeless Shelter 5")
      this.navCtrl.push(Shelter5Page);

  }
}
