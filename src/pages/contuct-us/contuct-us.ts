import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ContuctUsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contuct-us',
  templateUrl: 'contuct-us.html'
})
export class ContuctUsPage {

  contactUsFavoritesRoot = 'ContactUsFavoritesPage'
  contactUsRegionalOfficesRoot = 'ContactUsRegionalOfficesPage'
  contactUsMembershipCentresRoot = 'ContactUsMembershipCentresPage'


  constructor(public navCtrl: NavController) {}

}
