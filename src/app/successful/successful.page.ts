import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.page.html',
  styleUrls: ['./successful.page.scss'],
})
export class SuccessfulPage implements OnInit {

  constructor(
      public modalController: ModalController,
      public navController: NavController,
  ) {}

  ngOnInit() {}
  modalDismiss() {
   this.modalController.dismiss();
  }
  openMessagePage() {
    this.navController.navigateForward('/message');
    this.modalDismiss();
  }
}
