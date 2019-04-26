import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as firebaseApp from 'firebase/app';
import { User } from '../../../model/user';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  code = '';
  verificationId = null;

  user: User;
  captchaVerifier: firebaseApp.auth.RecaptchaVerifier;

  provider: firebaseApp.auth.PhoneAuthProvider;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
    this.provider = new firebaseApp.auth.PhoneAuthProvider();
  }

  async resend() {

    const toast = await this.toastController.create({
      message: '',
      duration: 2000,
      showCloseButton: true,
      // position: 'top',
      closeButtonText: 'Cerrar'
    });

    // For TEST
    this.captchaVerifier = new firebaseApp.auth.RecaptchaVerifier('captcha',
      {
        'size': 'invisible'
      });
    // For TEST END

    this.verificationId = await this.provider.verifyPhoneNumber(this.user.cellphone, this.captchaVerifier)
      .then(function (verificationId) {
        toast.message = 'Código de verificación reenviado';
        return verificationId;
      })
      .catch(function (error) {

        switch (error.code) {

          case 'auth/captcha-check-failed':
            toast.message = 'Captcha no válido o ha expirado, intente de nuevo';
            break;

          case 'auth/invalid-phone-number':
            toast.message = 'Número de teléfono incorrecto';
            break;

          case 'auth/missing-phone-number':
            toast.message = 'Número de teléfono perdido';
            break;

          case 'auth/quota-exceeded':
            toast.message = 'Cuota excedida. Contactar proveedor';
            // Enviar correo al administrador para aumentar cuota en firebase
            break;

          case 'auth/user-disabled':
            toast.message = 'Usuario deshabilitado';
            break;

          default:
            toast.message = 'Error inesperado. Contactar proveedor';
            // Enviar correo al administrador para aumentar cuota en firebase
            break;
        }

        // this.authenticationService.messageToast(error, toast);
        toast.present();
        return null;
      });

  }

  acept() {
    const data = { 'cancelled': false, 'code': this.code, 'verificationId': this.verificationId };
    this.modalController.dismiss(data);
  }

  cancel() {
    this.modalController.dismiss({ 'cancelled': true });
  }
}
