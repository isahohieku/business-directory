import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss']
})
export class CreateCategoryModalComponent implements OnInit {

  category: FormControl;
  categoryForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crud: CrudService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createFormControl();
    this.createForm();
    this.checkTask();
  }

  createFormControl() {
    this.category = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.categoryForm = new FormGroup({
      category: this.category
    });
  }

  checkTask() {
    if (this.data.header === 'Update') {
      this.category.patchValue(this.data.name);
    }
  }

  create() {
    if (this.categoryForm.valid) {
      const data = {
        name: this.category.value,
        id: null
      };

      if (this.data.header === 'Update') {
        data.id = this.data.id;
      }

      const url = `categories`;

      if (this.data.header === 'Update') {
        this.crud.updateMethod(url, data)
        .then((res: any) => {
          this.dialog.closeAll();
        })
        .catch(e => console.log(e));
      }

      if (this.data.header === 'Create') {
        delete data.id;
        this.crud.postAllMethod(url, data)
        .then((res: any) => {
          this.dialog.closeAll();
        })
        .catch(e => console.log(e));
      }
    }
  }

}
