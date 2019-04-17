import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerificationPage } from '../verification/verification.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../model/user';
import { ToastController } from '@ionic/angular';
import * as firebaseApp from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user: User = new User('', 'Test', 'Test', 'test@test.tt', '+59812345678', '4495 NW 73rd Ave, Miami, Florida');
  password = '';
  confirmPassword = '';

  constructor(
    public modalController: ModalController,
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private router: Router,
  ) {
    afAuth.auth.settings.appVerificationDisabledForTesting = true;
    firebaseApp.auth().settings.appVerificationDisabledForTesting = true;

  }

  ngOnInit() { }

  async register() {

    this.registerWithCellphone();
  }

  async registerWithCellphone() {
    const { user } = this;

    const toast = await this.toastController.create({
      message: '',
      duration: 2000,
      showCloseButton: true,
      // position: 'top',
      closeButtonText: 'Cerrar'
    });

    const captchaVerifier = new firebaseApp.auth.RecaptchaVerifier('registerBtn',
      {
        'size': 'invisible',
        // 'callback': function (response: any) {
        //   // reCAPTCHA solved, allow signInWithPhoneNumber.
        //   console.dir(response);
        // }
      });

    const modalVerification = await this.modalController.create({
      component: VerificationPage,
      cssClass: 'modalVerification',
      componentProps: { 'user': user }
    });

    const res = await this.afAuth.auth.signInWithPhoneNumber(user.cellphone, captchaVerifier)
      .then(function (confirmationResult) {
        modalVerification.present();
        return modalVerification.onWillDismiss().then(o => confirmationResult.confirm(o.data.code));
      })
      .catch(function (error) {

        if (error.code === 'auth/invalid-verification-code') {
          toast.message = 'Código de verificación no válido, intente de nuevo';
          toast.present();
          return false;
        }

        if (error.code === 'auth/missing-verification-code') {
          toast.message = 'Código de verificación perdido o erroneo, intente de nuevo';
          toast.present();
          return false;
        }

        if (error.code === 'auth/captcha-check-failed') {
          toast.message = 'Captcha no válido o expiró, intente de nuevo';
          toast.present();
          return false;
        }

        if (error.code === 'auth/invalid-phone-number') {
          toast.message = 'Número de teléfono incorrecto';
          toast.present();
          return false;
        }

        if (error.code === 'auth/missing-phone-number') {
          toast.message = 'Número de teléfono perdido';
          toast.present();
          return false;
        }

        if (error.code === 'auth/quota-exceeded') {
          toast.message = 'Cuota excedida. Contactar proveedor';
          // Enviar correo al administrador para aumentar cuota en firebase
          toast.present();
          return false;
        }

        if (error.code === 'auth/user-disabled') {
          toast.message = 'Usuario deshabilitado';
          toast.present();
          return false;
        }

        if (error.code === 'auth/operation-not-allowed') {
          toast.message = 'Método de autenticación no permitido';
          toast.present();
          return false;
        }

        return true;
      });

    if (res) {
      this.router.navigateByUrl('/home');
    }
  }

  /// Autenticar con correo
  async registerWithEmail() {
    const { user } = this;

    const toast = await this.toastController.create({
      message: '',
      duration: 2000,
      showCloseButton: true,
      // position: 'top',
      closeButtonText: 'Cerrar'
    });

    if (this.password !== this.confirmPassword) {
      toast.message = 'Las claves no coinciden';
      toast.present();
      return false;
    }

    const res = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, this.password).catch(function (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.message = 'Existe una cuenta con el mismo correo';
        toast.present();
        return false;
      }

      if (error.code === 'auth/invalid-email') {
        toast.message = 'Correo no válido';
        toast.present();
        return false;
      }

      if (error.code === 'auth/operation-not-allowed') {
        toast.message = 'Cuenta deshabilitada';
        toast.present();
        return false;
      }

      if (error.code === 'auth/weak-password') {
        toast.message = 'Clave muy débil';
        toast.present();
        return false;
      }

      return true;

    });
  }

  async verificationPage() {
    const modalVerification = await this.modalController.create({
      component: VerificationPage,
      cssClass: 'modalVerification',
    });
    await modalVerification.present();
    return modalVerification;
  }
}
