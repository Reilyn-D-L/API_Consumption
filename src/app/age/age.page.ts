import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage {
  name: string = '';
  ages: number = 0;
  status: string = '';
  icon: string = '';

  constructor() { }
  calculateAge() {
    axios
      .get(`https://api.agify.io/?name=${this.name}`)
      .then((response) => {
        this.ages = response.data.age;

        if (this.ages < 18) {
          this.status = 'Joven';
          this.icon = 'child';
        } else if (this.ages >= 18 && this.ages <= 65) {
          this.status = 'Adulto';
          this.icon = 'person';
        } else {
          this.status = 'Anciano';
          this.icon = 'person-outline';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
