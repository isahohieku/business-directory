import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DeleteItemModalComponent } from 'src/app/util/delete-item-modal/delete-item-modal.component';
import { CreateBusinessModalComponent } from 'src/app/util/create-business-modal/create-business-modal.component';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss']
})
export class BusinessesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.dialog.open(CreateBusinessModalComponent, dialogConfig)
      .afterClosed().subscribe(_ => {});
  }

  deleteModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.dialog.open(DeleteItemModalComponent, dialogConfig)
      .afterClosed().subscribe(_ => {});
  }
}
