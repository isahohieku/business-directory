import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageUploadSingleComponent } from './image-upload-single.component';

describe('ProductImageUploadSingleComponent', () => {
  let component: ProductImageUploadSingleComponent;
  let fixture: ComponentFixture<ProductImageUploadSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImageUploadSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageUploadSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
