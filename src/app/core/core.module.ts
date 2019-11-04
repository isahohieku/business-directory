import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { routes } from './routes';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    HomeComponent,
    BusinessComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreModule { }
