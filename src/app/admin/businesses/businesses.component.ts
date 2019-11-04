import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeleteItemModalComponent } from 'src/app/util/delete-item-modal/delete-item-modal.component';
import { CreateBusinessModalComponent } from 'src/app/util/create-business-modal/create-business-modal.component';
import { CrudService } from 'src/app/services/crud.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent implements OnInit {
  businesses: any[] = [];

  constructor(
    private dialog: MatDialog,
    private crud: CrudService,
    private util: UtilService
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

  openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.dialog.open(CreateBusinessModalComponent, dialogConfig)
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
