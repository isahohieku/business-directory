import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageUploadComponent } from './image-upload.component';

describe('ProductImageUploadComponent', () => {
  let component: ProductImageUploadComponent;
  let fixture: ComponentFixture<ProductImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
