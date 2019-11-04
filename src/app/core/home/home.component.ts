import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTerm = [];
  businessSearch: FormControl;
  businesses: any;

  constructor(
    private crud: CrudService
  ) { }

  ngOnInit() {
    this.getBusinesses();
  }

  getBusinesses() {
    const url = `businesses`;

    this.crud.getAllMethod(url)
      .then((res: any) => {
        if (res.status === 'success') {
          this.businesses = res.data;
        }
      })
      .catch(e => console.log(e));
  }

  searchABusiness(e) {
    console.log(e);
  }

}
