import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { ProductImage } from '../util/product-image';

@Injectable({
  providedIn: 'root'
})
export class AddImagesService {

  productImages: BehaviorSubject<ProductImage[]> = new BehaviorSubject<ProductImage[]>([]);

  constructor() { }

  setNextState(data) {
    this.productImages.next(data);
  }

  getProductsUrlArray() {
    const images = [];

    this.productImages.value.forEach(item => {
      if (item.imageUrl !== '') {
        images.push(item.imageUrl);
      }
    });

    return images;
}

}
