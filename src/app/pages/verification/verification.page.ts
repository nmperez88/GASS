import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(
      public modalController: ModalController,
  ) { }

  ngOnInit() {}
  modalDismiss() {
    this.modalController.dismiss();
  }
}
