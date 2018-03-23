import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactUsDetailsPage } from './contact-us-details';

@NgModule({
  declarations: [
    ContactUsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactUsDetailsPage),
  ],
})
export class ContactUsDetailsPageModule {}
