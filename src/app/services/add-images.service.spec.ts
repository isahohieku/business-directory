import { TestBed } from '@angular/core/testing';

import { AddImagesService } from './add-images.service';

describe('AddImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddImagesService = TestBed.get(AddImagesService);
    expect(service).toBeTruthy();
  });
});
