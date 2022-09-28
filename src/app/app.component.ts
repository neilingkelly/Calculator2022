import { Component} from '@angular/core';
import { IonItem, Platform } from '@ionic/angular';
import { HomePage } from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  appPages = [
    {
      title: 'History',
      url: '/history'
    },
    {
      title: 'Customize',
      url: '/customize'
    },
    {
      title: 'About',
      url: '/about'
    }
  ];

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
    });
  }
}
