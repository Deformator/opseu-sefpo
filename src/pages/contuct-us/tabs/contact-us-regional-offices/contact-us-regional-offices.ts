import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContuctUsProvider } from "../../../../providers/contuct-us/contuct-us";

import { ContactUsDetailsPage } from "../../contact-us-details/contact-us-details"

@IonicPage()
@Component({
  selector: 'page-contact-us-regional-offices',
  templateUrl: 'contact-us-regional-offices.html',
})
export class ContactUsRegionalOfficesPage {

  regionalOffices = [];

  constructor(public contuctUsProvider: ContuctUsProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.contuctUsProvider.getRegionalOffices().subscribe((rOffices)=> this.regionalOffices = rOffices)
  }

  officeSelected(office){
    this.navCtrl.push(ContactUsDetailsPage, {
      officeDetails : office
    })
  }

}
