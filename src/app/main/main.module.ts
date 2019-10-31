import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { routes } from './routes';
import { AdminComponent } from '../admin/admin.component';
import { SigninComponent } from '../admin/signin/signin.component';

@NgModule({
  declarations: [
    CoreComponent,
    AdminComponent,
    SigninComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
