import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { materials } from './material-design/materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../admin/auth/auth-interceptor/http-interceptor';
import { ImageUploadComponent } from '../util/image-upload/image-upload.component';
import { ImageUploadSingleComponent } from '../util/image-upload-single/image-upload-single.component';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { FileUploadModule } from 'ng2-file-upload';
import { Cloudinary as cloudinary_core } from 'cloudinary-core';
import { environment } from '../../environments/environment.prod';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export const cloudinary = {
  Cloudinary: cloudinary_core
};

export const config: CloudinaryConfiguration = environment.cloudinaryConfigs;

@NgModule({
  declarations: [
    ImageUploadComponent,
    ImageUploadSingleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...materials,

    // Cloudinary and File upload
    CloudinaryModule.forRoot(cloudinary, config),
    FileUploadModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
     { provide: MatDialogRef, useValue: {} }
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
