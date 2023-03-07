import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface GenderData {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage {
  nombre: string= '';
  genero: string= '';

  async predecirGenero() {
    try {
      const response = await axios.get(`https://api.genderize.io?name=${this.nombre}`);
      this.genero = response.data.gender;
    } catch (error) {
      console.error(error);
    }
  }

  constructor() { }


}
