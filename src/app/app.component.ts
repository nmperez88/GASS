import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { EntityManagerService } from './services/entity-manager.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseApp from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  user: User = new User('', '', '', '', '', '', '', null);

  public appPages = [
    {
      title: 'Mi Perfil',
      url: '/tabs',
      icon: 'person'
    },
    {
      title: 'Solicitar Servicio',
      url: '/home',
      icon: 'checkmark-circle-outline'
    },
    {
      title: 'Historial de Solicitudes',
      url: '/history',
      icon: 'filing'
    },
    {
      title: 'Mensajes',
      url: '/message',
      icon: 'chatbubbles'
    },
    {
      title: 'Registrarse',
      url: '/registration',
      icon: 'filing'
    },
    {
      title: 'Facturación',
      url: '/billing',
      icon: 'logo-usd'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private authenticationService: AuthenticationService,
    private emService: EntityManagerService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.authenticationService.getUserIdTokenFromStorage().then(() => {
      this.authenticationService.authenticationState.subscribe(state => {
        console.log('state: ' + state);
        if (state) {
          this.updateView();
          this.router.navigate(['secure', 'home']);
        } else {
          this.router.navigate(['registration']);
        }
      });
      // });

    });
  }

  updateView() {
    this.emService.getUser().once('value').then((dataSnapshot) => {
      if (dataSnapshot.exists()) {
        this.user = dataSnapshot.val();
      }
    });
  }
}
