import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss']
})
export class CreateCategoryModalComponent implements OnInit {

  category: FormControl;
  categoryForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createFormControl();
    this.createForm();
  }

  createFormControl() {
    this.category = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.categoryForm = new FormGroup({
      category: this.category
    });
  }

  create() {

  }

}
