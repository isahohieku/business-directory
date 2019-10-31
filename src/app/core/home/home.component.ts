import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTerm = [];
  businessSearch: FormControl;

  constructor() { }

  ngOnInit() {
  }

  searchABusiness(e) {
    console.log(e);
  }

}
