import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { materials } from './material-design/materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../admin/auth/auth-interceptor/http-interceptor';
import { ImageUploadComponent } from '../util/image-upload/image-upload.component';
import { ImageUploadSingleComponent } from '../util/image-upload-single/image-upload-single.component';

@NgModule({
  declarations: [
    ImageUploadComponent,
    ImageUploadSingleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...materials
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [
    // Modules
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ...materials,

    // Components
    ImageUploadComponent,
    ImageUploadSingleComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
