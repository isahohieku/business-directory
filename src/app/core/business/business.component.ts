import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  param;
  id: any;
  business: any;

  constructor(
    private crud: CrudService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this.addView();
    this.getBusiness();
  }

  getBusiness() {
    const url = `businesses?id=${this.id}`;

    this.crud.getAllMethod(url)
      .then((res: any) => {
        if (res.status === 'success') {
          this.business = res.data;
        }
      })
      .catch(e => console.log(e));
  }

  addView() {
    const url = `businessViews`;

    this.crud.updateMethod(url, { businessId: this.id })
      .then((res: any) => {
        if (res.status === 'success') {
          this.business = res.data;
        }
      })
      .catch(e => console.log(e));
  }

}
