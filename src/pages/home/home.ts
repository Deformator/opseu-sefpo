import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContuctUsPage } from '../../pages/contuct-us/contuct-us'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController) {

  }

  goToContactUs(){
    this.navCtrl.push(ContuctUsPage)
  }

}
