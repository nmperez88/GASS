import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Mi Perfil',
      url: '/profile',
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
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
