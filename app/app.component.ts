import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  username;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  logout() {
    localStorage.removeItem('name');
    sessionStorage.removeItem('token');
    localStorage.removeItem('mobile');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('public_id');
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.menuCtrl.swipeGesture(false);
    this.menuCtrl.close();
    this.username = localStorage.getItem('username');
  }

}
