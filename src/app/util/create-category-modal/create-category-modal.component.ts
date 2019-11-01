import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss']
})
export class CreateCategoryModalComponent implements OnInit {

  category: FormControl;
  categoryForm: FormGroup;

  constructor(
    private crud: CrudService,
    private dialog: MatDialog
  ) { }

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
    if (this.categoryForm.valid) {
      const data = {
        name: this.category.value
      };

      const url = `categories`;

      this.crud.postAllMethod(url, data)
        .then((res: any) => {
          console.log(res);
          this.dialog.closeAll();
        })
        .catch(e => console.log(e));
    }
  }

}
