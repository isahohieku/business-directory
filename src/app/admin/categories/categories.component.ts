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
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
  }

  openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.dialog.open(CreateCategoryModalComponent, dialogConfig)
      .afterClosed().subscribe(_ => { });
  }

  deleteModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.dialog.open(DeleteItemModalComponent, dialogConfig)
      .afterClosed().subscribe(_ => { });
  }

}
