import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ProductImage } from '../product-image';
import { AddImagesService } from 'src/app/services/add-images.service';
declare var $: any;

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;
  @ViewChild('cropper-wrapper') cropperWrapper: ElementRef;
  @ViewChild('cropper-window') cropperWindow: ElementRef;

  @Input() id: number;
  @Input() fromAdmin: boolean;
  @Output() images = new EventEmitter();

  productImages: ProductImage[];
  imagePreview = '';
  activeImage: any;

  constructor(
    private addImageService: AddImagesService
  ) {
    this.productImages = [];
  }

  ngOnInit() {
    this.productImages.push(new ProductImage());
  }

  addImage() {
    if (this.productImages.length < 4) { this.productImages.push(new ProductImage()); }
  }

  toggleFileInput(i) {
    document.getElementById(`inputField${this.id}-${i}`).click();
  }

  uploadInitiated(e, i) {
    this.productImages[i].file = e;
  }

  binary(e, i) {
    this.imagePreview = e;
    this.productImages[i].binaryImage = e;
    this.activeImage = i;
    this.affirmImage();
  }

  affirmImage() {
    this.productImages[this.activeImage].affirm = true;
    this.closeModalM();
    this.addImage();

    if (!this.fromAdmin) {
      this.addImageService.setNextState(this.productImages);
    }
  }

  uploadEnded(e, i) {
    this.productImages[i].imageUrl = e;

    if (this.fromAdmin) {
      const images = this.productImages.filter(item => item.imageUrl);
      this.images.emit(images);
      return;
    }
  }

  removeImage(i) {
    this.productImages.splice(i, 1);
    if (!$(`[src='assets/img/add-img2.jpg']`).length) {
      this.addImage();
    }

    if (!this.fromAdmin) {
      this.addImageService.setNextState(this.productImages);
    }
  }

  removeActiveImage() {
    this.closeModalM();
    this.productImages[this.activeImage].file = null;
  }

  closeModalM() {
    const inputField = `inputField${this.activeImage}`;

    $('.cropper-wrapper').removeClass('small');
    $('.cropper-wrapper').removeClass('modal-wrapper-visible');

    $('.cropper-window').removeClass('modal-window-visible');

    $('.cropper-window').removeClass('modal-window-visible1');

    $('body').removeClass('fix-scroll');
  }

  showModal() {
    const inputField = `#inputField${this.id}-${this.activeImage}`;

    $(inputField).next('.cropper-wrapper').addClass('small');
    setTimeout(() => {
      $(inputField).next('.cropper-wrapper').addClass('modal-wrapper-visible');
    }, 100);

    setTimeout(() => {
      $(inputField).next('.cropper-wrapper').children('.cropper-window').addClass('modal-window-visible');
    }, 100);

    setTimeout(() => {
      $(inputField).next('.cropper-wrapper').children('.cropper-window').addClass('modal-window-visible1');
    }, 200);

    setTimeout(() => {
      $('body').addClass('fix-scroll');
    }, 100);
  }

}
