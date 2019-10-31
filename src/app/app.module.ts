import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { CreateCategoryModalComponent } from './util/create-category-modal/create-category-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoryModalComponent
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AdminLayoutModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
