import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseUIModule } from 'firebaseui-angular';

import { IonicModule } from '@ionic/angular';

import { RegistrationPage } from './registration.page';
import {VerificationPage} from '../verification/verification.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseUIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrationPage, VerificationPage],
  entryComponents: [VerificationPage]
})
export class RegistrationPageModule {}
