import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  user = '';
  public code = '';

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() { }

  resend() {
    // this.modalController.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({ 'code': this.code });
  }
}
