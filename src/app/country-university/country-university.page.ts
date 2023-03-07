import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface University {
  name: string;
  domains: string[];
  web_pages: string[];
}

@Component({
  selector: 'app-country-university',
  templateUrl: './country-university.page.html',
  styleUrls: ['./country-university.page.scss'],
})
export class CountryUniversityPage {
  countryName: string = '';
  universities: University[] = [];

  constructor() {}

  searchUniversities() {
    axios.get(`http://universities.hipolabs.com/search?country=${this.countryName}`)
      .then(response => {
        this.universities = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
