import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { materials } from './material-design/materials';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ...materials
  ],
  exports: [
    CommonModule,
    RouterModule,
    ...materials
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
