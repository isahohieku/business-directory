import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateCategoryModalComponent } from 'src/app/util/create-category-modal/create-category-modal.component';
import { DeleteItemModalComponent } from 'src/app/util/delete-item-modal/delete-item-modal.component';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(
    private dialog: MatDialog,
    private crud: CrudService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    const url = `categories`;

    this.crud.getAllMethod(url)
      .then((res: any) => {
        if (res.status === 'success') {
          this.categories = res.data;
        }
      })
      .catch(e => console.log(e));
  }

  openCreateModal(id) {
    let data = {
      header: `Create`
    };
    if (id) {
      data = { header: 'Update', ...this.getSelectedCategory(id) };
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    this.dialog.open(CreateCategoryModalComponent, dialogConfig)
      .afterClosed().subscribe(_ => { this.getCategories(); });
  }

  getSelectedCategory(id) {
    return this.categories.find(item => item.id === id);
  }

  deleteModal(id) {
    const data = this.getSelectedCategory(id);
    data.component = 'category';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    this.dialog.open(DeleteItemModalComponent, dialogConfig)
      .afterClosed().subscribe(_ => { this.getCategories(); });
  }

}
