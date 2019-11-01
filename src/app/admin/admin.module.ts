import { NgModule } from '@angular/core';
import { SigninComponent } from './auth/signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryModalComponent } from '../util/create-category-modal/create-category-modal.component';
import { DeleteItemModalComponent } from '../util/delete-item-modal/delete-item-modal.component';
import { CreateBusinessModalComponent } from '../util/create-business-modal/create-business-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BusinessesComponent,
    CategoriesComponent,
    CreateCategoryModalComponent,
    DeleteItemModalComponent,
    CreateBusinessModalComponent


  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    CreateCategoryModalComponent,
    DeleteItemModalComponent,
    CreateBusinessModalComponent
  ]
})
export class AdminModule { }
