import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CoreComponent } from '../core/core.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    CoreComponent
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
