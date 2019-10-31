import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AdminLayoutComponent, HeaderComponent, FooterComponent, SidnavComponent, MainComponent],
  imports: [
    SharedModule
  ],
  exports: [AdminLayoutComponent, HeaderComponent, FooterComponent,  SidnavComponent, MainComponent]
})
export class AdminLayoutModule { }
