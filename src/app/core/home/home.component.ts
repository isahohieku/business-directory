import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap, debounceTime } from 'rxjs/operators';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchTerm = [];
  businessSearch: FormControl;
  businessSearchForm: FormGroup;
  businesses: any;

  constructor(
    private crud: CrudService
  ) { }

  ngOnInit() {
    this.getBusinesses();
    this.createFormControl();
    this.createForm();
    this.search();
  }

  createFormControl() {
    this.businessSearch = new FormControl('');
  }

  createForm() {
    this.businessSearchForm = new FormGroup({
      businessSearch: this.businessSearch
    });
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

  search() {
    this.businessSearch.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value =>
          this.crud.getAllMethodWithObservables(`businesses/search?term=${this.businessSearch.value}`)
            .pipe()
        )
      )
      .subscribe((result: any) => {
        this.searchTerm = [];
        this.searchTerm = result.data.filter(item => this.businesses.find(item2 => item.id === item2.id));
      });
  }

}
