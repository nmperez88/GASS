import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    private afAuth: AngularFireAuth,
    public storage: Storage
  ) { }

  login() {
    // return this.authenticationState.next(this.afAuth.auth.currentUser != null);
  }

  logout() {
    // return this.authenticationState.next(this.afAuth.auth.currentUser != null);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  // async getUserIdTokenFromStorage() {
  //   return this.storage.get('currentUser.IdToken').then((userIdToken) => {
  //     this.authenticationState.next(currentUser.IdToken != null);
  //   });
  // }

  async i18nMessageToast(error: any, toast: any) {

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
  }
}
