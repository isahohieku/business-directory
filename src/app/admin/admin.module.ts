import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [DashboardComponent, BusinessesComponent, CategoriesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }
