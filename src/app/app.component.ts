import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Multi-Use', url: '/folder/Multi-Use', icon: 'Hammer' },
    { title: 'Gender', url: '/gender', icon: 'Male-Female' },
    { title: 'Age', url: '/age', icon: 'hourglass' },
    { title: 'Country University', url: '/country-university', icon: 'school' },
    { title: 'Wheather', url: '/wheather', icon: 'cloudy' },
    { title: 'About', url: '/about', icon: 'information-circle' }
  ];
  
  constructor() {}
}
