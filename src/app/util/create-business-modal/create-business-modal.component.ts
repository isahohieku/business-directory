import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { map, switchMap, debounceTime } from 'rxjs/operators';
import { AddImagesService } from 'src/app/services/add-images.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-create-business-modal',
  templateUrl: './create-business-modal.component.html',
  styleUrls: ['./create-business-modal.component.scss']
})
export class CreateBusinessModalComponent implements OnInit, OnDestroy {

  businessForm: FormGroup;
  name: FormControl;
  description: FormControl;
  website: FormControl;
  phone: FormControl;
  address: FormControl;
  email: FormControl;
  businessCategory: FormControl;
  searchTerm: any;
  categories: any[] = [];

  constructor(
    private crud: CrudService,
    private imageService: AddImagesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.search();
  }

  createFormControls() {
    this.name = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.website = new FormControl('', [Validators.required]);
    this.phone = new FormControl('', [Validators.required]);
    this.address = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.businessCategory = new FormControl('');
  }

  createForm() {
    this.businessForm = new FormGroup({
      name: this.name,
      description: this.description,
      website: this.website,
      phone: this.phone,
      address: this.address,
      email: this.email,
      businessCategory: this.businessCategory
    });
  }

  create() {

    if (this.businessForm.valid) {
      const images = this.imageService.getProductsUrlArray();

      const categories = this.categories.map(item => item.id);

      const data = {
        name: this.name.value,
        description: this.description.value,
        website: this.website.value,
        phone: this.phone.value,
        location: this.address.value,
        email: this.email.value,
        categories,
        images
      };

      const url = 'businesses';

      this.crud.postAllMethod(url, data)
        .then((res: any) => {
          if (res.status === 'success') {
            this.dialog.closeAll();
          }
        })
        .catch(e => console.log(e));

    }

  }

  addCategory(category) {
    if (this.categories.find(item => item.id === category.id)) {
      this.businessCategory.patchValue('');
      return;
    }

    this.categories.push(category);
    this.businessCategory.patchValue('');
  }

  search() {
    // if (this.businessCategory.value === '') {
    //   return;
    // }
    this.businessCategory.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value =>
          this.crud.getAllMethodWithObservables(`categories/search?term=${this.businessCategory.value}`)
            .pipe()
        )
      )
      .subscribe((result: any) => {
        this.searchTerm = [];
        this.searchTerm = result.data.filter(item => this.categories.find(item2 => item.id === item2.id));
      });
  }

  ngOnDestroy() {
    this.imageService.setNextState([]);
  }
}
