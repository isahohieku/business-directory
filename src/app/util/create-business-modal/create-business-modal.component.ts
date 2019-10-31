import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-business-modal',
  templateUrl: './create-business-modal.component.html',
  styleUrls: ['./create-business-modal.component.scss']
})
export class CreateBusinessModalComponent implements OnInit {

  businessForm: FormGroup;
  name: FormControl;
  description: FormControl;
  website: FormControl;
  phone: FormControl;
  address: FormControl;
  email: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.website = new FormControl('', [Validators.required]);
    this.phone = new FormControl('', [Validators.required]);
    this.address = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  createForm() {
    this.businessForm = new FormGroup({
      name: this.name,
      description: this.description,
      website: this.website,
      phone: this.phone,
      address: this.address,
      email: this.email
    });
  }

  create() {

  }

}
