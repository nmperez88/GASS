import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerificationPage } from '../verification/verification.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../model/user';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user: User = new User('', '', '', '', '', '');
  password = '';
  confirmPassword = '';

  constructor(
    public modalController: ModalController,
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
   ) {}

   ngOnInit() { }

   async register() {
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
     const modal = await this.modalController.create({
       component: VerificationPage,
       cssClass: 'modalVerification',
     });
     await modal.present();
   }
}
