import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.scss']
})
export class DeleteItemModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private crud: CrudService
  ) { }

  ngOnInit() {
  }

  deleteBusiness() {

    if (!this.data.component) {
      return;
    }

    let url = '';

    if (this.data.component === 'business') {
      url = `businesses?id=${this.data.id}`;
    }

    if (this.data.component === 'category') {
      url = `categories?id=${this.data.id}`;
    }

    this.crud.deleteMethod(url)
      .then((res: any) => {
        if (res.status === 'success') {
          this.dialog.closeAll();
        }
      })
      .catch(e => {
        console.log(e);
      });

  }

}
