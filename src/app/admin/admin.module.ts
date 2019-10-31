import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [AdminComponent, SigninComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
