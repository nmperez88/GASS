import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseApp from 'firebase/app';
import { Storage } from '@ionic/storage';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class EntityManagerService {

  constructor(
    private afAuth: AngularFireAuth,
    public storage: Storage
  ) { }

  getUser() {
    return firebaseApp.database().ref('users/' + this.afAuth.auth.currentUser.uid);
  }
}
