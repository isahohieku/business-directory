import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { routes } from './routes';
import { AdminComponent } from '../admin/admin.component';
import { SigninComponent } from '../admin/auth/signin/signin.component';
import { HomeComponent } from '../admin/home/home.component';

@NgModule({
  declarations: [
    CoreComponent,
    AdminComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
