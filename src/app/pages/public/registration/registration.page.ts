import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseApp from 'firebase/app';
import { User } from '../../../model/user';
import { VerificationPage } from '../verification/verification.page';
import { AuthenticationService } from '../../../services/authentication.service';
import { EntityManagerService } from '../../../services/entity-manager.service';

declare var grecaptcha: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  // user: User = new User('', 'Test', 'Test', 'test@test.tt', '+59899273897', '4495 NW 73rd Ave, Miami, Florida', 'client', 0);
  user: User = new User('', 'Test', 'Test', 'test@test.tt', '+59812345678', '4495 NW 73rd Ave, Miami, Florida', 'client', 0);

  password = '';
  confirmPassword = '';

  captchaVerifier: firebaseApp.auth.RecaptchaVerifier;

  constructor(
    public modalController: ModalController,
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private router: Router,
    private authService: AuthenticationService,
    private emService: EntityManagerService,
  ) {
    // For TEST
    afAuth.auth.settings.appVerificationDisabledForTesting = true;
    firebaseApp.auth().settings.appVerificationDisabledForTesting = true;
    // For TEST END
  }

  ngOnInit() {
    // PROD
    // this.captchaVerifier = new firebaseApp.auth.RecaptchaVerifier('captcha',
    //   {
    //     'size': 'invisible'
    //   });
    // this.captchaVerifier.render();
    // PROD END
  }

  async register() {

    this.registerWithCellphone();
  }

  async registerWithCellphone() {
    const { user } = this;
    // For TEST
    this.captchaVerifier = new firebaseApp.auth.RecaptchaVerifier('captcha',
      {
        'size': 'invisible'
      });
    // For TEST END

    const toast = await this.toastController.create({
      message: '',
      duration: 2000,
      showCloseButton: true,
      // position: 'top',
      closeButtonText: 'Cerrar'
    });

    const modalVerification = await this.modalController.create({
      component: VerificationPage,
      cssClass: 'modalVerification',
      componentProps: { 'user': user, 'captchaVerifier': this.captchaVerifier },
      backdropDismiss: false
    });

    let credential: firebaseApp.auth.AuthCredential;

    const res = await this.afAuth.auth.signInWithPhoneNumber(user.cellphone, this.captchaVerifier)
      .then(async function (confirmationResult) {
        modalVerification.present();
        const o = await modalVerification.onWillDismiss();
        let result: any;
        if (o.data.cancelled) {
          result = false;
        } else {
          const verificationId = o.data.verificationId != null ? o.data.verificationId : confirmationResult.verificationId;
          result = await confirmationResult.confirm(o.data.code);
          credential = firebaseApp.auth.PhoneAuthProvider.credential(verificationId, o.data.code);
        }
        return result;
      })
      .catch(function (error) {

        switch (error.code) {
          case 'auth/invalid-verification-code':
            toast.message = 'Código de verificación no válido, intente de nuevo';
            break;

          case 'auth/missing-verification-code':
            toast.message = 'Código de verificación perdido o erroneo, intente de nuevo';
            break;

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

          case 'auth/operation-not-allowed':
            toast.message = 'Método de autenticación no permitido';
            break;

          case 'auth/missing-verification-id':
            toast.message = 'Identificador de verificación perdido. Contactar proveedor';
            break;

          default:
            toast.message = 'Error inesperado. Contactar proveedor';
            // Enviar correo al administrador para aumentar cuota en firebase
            break;
        }

        // this.authenticationService.i18nMessageToast(error, toast);
        toast.present();
        return false;
      });
    // PROD
    // this.captchaVerifier.render().then(function (widgetId: any) {
    //   grecaptcha.reset(widgetId);
    // });
    // PROD END

    if (res) {
      user.uid = this.afAuth.auth.currentUser.uid;
      this.authService.storage.set('user', user);
      firebaseApp.database().ref('users/' + user.uid)
        .set(user)
        .then(() => {
          return this.afAuth.auth.currentUser.getIdToken().then((idToken) => {
            this.authService.storage.set('currentUser.IdToken', idToken)
              .then(() => {
                this.authService.authenticationState.next(true);
              })
              .catch((error) => {
                console.dir('No fue posible almacenar la credencial: ');
                console.dir(error);
              });
          });
        })
        .catch((err) => { console.log(err); });




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
