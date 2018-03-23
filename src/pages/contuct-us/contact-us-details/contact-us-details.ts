import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ContactUsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us-details',
  templateUrl: 'contact-us-details.html',
})
export class ContactUsDetailsPage {

  officeDetails = {}

  constructor(public callNumber: CallNumber, public navCtrl: NavController, public navParams: NavParams) {
    this.officeDetails = navParams.get('officeDetails')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsDetailsPage');
  }

}
