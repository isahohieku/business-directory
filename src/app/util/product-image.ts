
export interface Progress  {
    uploadStart: boolean;
    uploadEnd: boolean;
    cloudinaryResponse: any;
    completed: boolean;
}

export interface ProductImageType {
    title: string;
    file: any;
    affirm: boolean;
    binaryImage: string;
    imageUrl: string;
    progress: Progress;
}

export class ProductImage implements ProductImageType {
    title;
    binaryImage = '';
    affirm;
    imageUrl;

    progress: Progress;
    file: any;
    constructor() {
        this.title = 'productImage';
        this.file = null;
        this.affirm = false;
        this.imageUrl = '';
    }
}
