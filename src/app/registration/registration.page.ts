import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {VerificationPage} from '../verification/verification.page';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public modalController: ModalController ) {}

  async verificationPage() {
    const modal = await this.modalController.create({
      component: VerificationPage,
      cssClass: 'modalVerification',
    });
    await modal.present();
  }
  ngOnInit() {
  }
}
